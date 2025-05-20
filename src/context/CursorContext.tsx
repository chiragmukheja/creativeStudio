import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CursorContextType {
  cursorType: string;
  setCursorType: (type: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
});

export const useCursor = () => useContext(CursorContext);

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};