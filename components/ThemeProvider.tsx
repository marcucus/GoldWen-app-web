import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('system');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  // Function to get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Function to apply theme to document
  const applyTheme = (themeToApply: 'light' | 'dark') => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', themeToApply === 'dark');
      setActualTheme(themeToApply);
    }
  };

  // Handle theme changes
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('goldwen-theme', newTheme);
    }

    let themeToApply: 'light' | 'dark';
    if (newTheme === 'system') {
      themeToApply = getSystemTheme();
    } else {
      themeToApply = newTheme;
    }
    
    applyTheme(themeToApply);
  };

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get saved theme or default to system
    const savedTheme = localStorage.getItem('goldwen-theme') as Theme | null;
    const initialTheme = savedTheme || 'system';
    
    // Determine actual theme to apply
    let themeToApply: 'light' | 'dark';
    if (initialTheme === 'system') {
      themeToApply = getSystemTheme();
    } else {
      themeToApply = initialTheme;
    }

    setTheme(initialTheme);
    applyTheme(themeToApply);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}