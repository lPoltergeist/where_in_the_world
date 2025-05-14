import { darkTheme } from '@/styles/themes/dark';
import { lightTheme } from '@/styles/themes/light';
import { MyComponentProps, ThemeContextType } from '@/types/theme';
import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: MyComponentProps) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    switch (savedTheme) {
      case 'dark':
        setTheme(darkTheme);
        break;

      case 'light':
        setTheme(lightTheme);
        break;

      default:
        localStorage.setItem('theme', 'light');
        setTheme(lightTheme);
        break;
    }

  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
