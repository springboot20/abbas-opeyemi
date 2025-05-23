import React, { useState, useEffect, useMemo, createContext, useRef, useCallback } from "react";

interface TypeWriterContextProps {
  textToDisplay: string;
}

export const TypeWriterContext = createContext<TypeWriterContextProps>(
  {} as TypeWriterContextProps
);

export const TypeWriterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textToDisplay, setTextToDisplay] = useState<string>("");
  const words = useMemo(() => ["Developer", "Expert"], []);
  const currentWordIndex = useRef<number>(Math.floor(Math.random() * words.length));

  const wait = useRef<number>(150);
  const speed = useRef<number>(350);

  const type = useCallback(() => {
    const current = currentWordIndex.current % words.length;
    const fullText = words[current];

    if (isDeleting) {
      setTextToDisplay((prev) => fullText.substring(0, prev.length - 1));
    } else {
      setTextToDisplay((prev) => fullText.substring(0, prev.length + 1));
    }

    if (!isDeleting && textToDisplay === fullText) {
      setIsDeleting(true);
      speed.current = wait.current;
    } else if (isDeleting && textToDisplay === "") {
      setIsDeleting(false);
      currentWordIndex.current++;
      speed.current = 350;
    }
  }, [isDeleting, textToDisplay, words]);

  useEffect(() => {
    setTimeout(type, speed.current);
  }, [type]);

  const values = useMemo(
    () => ({
      textToDisplay,
    }),
    [textToDisplay]
  );

  return <TypeWriterContext.Provider value={values}>{children}</TypeWriterContext.Provider>;
};
