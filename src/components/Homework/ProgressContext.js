import { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  return useContext(ProgressContext);
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (count) => {
    const percentage = (count / 10) * 100;
    setProgress(percentage);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
