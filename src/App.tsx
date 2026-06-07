import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Pages } from "./pages";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/loading-screen/LoadingScreen";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading-screen"
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Pages />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;