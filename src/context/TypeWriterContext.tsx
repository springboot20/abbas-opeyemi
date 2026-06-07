import React, { useState, useEffect, useMemo, createContext, useRef, useCallback } from 'react';

interface TypeWriterContextProps {
  textToDisplay: string;
}

export const TypeWriterContext = createContext<TypeWriterContextProps>(
  {} as TypeWriterContextProps,
);

export const TypeWriterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [textToDisplay, setTextToDisplay] = useState('');
  const words = useMemo(() => ['Experiences.', 'Interfaces.', 'Products.', 'Solutions.'], []);
  const currentWordIndex = useRef(0);
  const speed = useRef(120);

  const type = useCallback(() => {
    const current = currentWordIndex.current % words.length;
    const fullText = words[current];

    if (isDeleting) {
      setTextToDisplay((prev) => fullText.substring(0, prev.length - 1));
      speed.current = 60;
    } else {
      setTextToDisplay((prev) => fullText.substring(0, prev.length + 1));
      speed.current = 120;
    }

    if (!isDeleting && textToDisplay === fullText) {
      setIsDeleting(true);
      speed.current = 1800;
    } else if (isDeleting && textToDisplay === '') {
      setIsDeleting(false);
      currentWordIndex.current++;
      speed.current = 300;
    }
  }, [isDeleting, textToDisplay, words]);

  useEffect(() => {
    const t = setTimeout(type, speed.current);
    return () => clearTimeout(t);
  }, [type]);

  const values = useMemo(() => ({ textToDisplay }), [textToDisplay]);

  return <TypeWriterContext.Provider value={values}>{children}</TypeWriterContext.Provider>;
};
