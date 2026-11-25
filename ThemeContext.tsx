
import React, {createContext, useState} from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'Light',
 setTheme: (_theme: string) => {},
});

export const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState('Light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
