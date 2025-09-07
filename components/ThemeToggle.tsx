import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const themes = [
    { key: 'light' as const, label: 'Clair', icon: '☀️' },
    { key: 'dark' as const, label: 'Sombre', icon: '🌙' },
    { key: 'system' as const, label: 'Système', icon: '💻' }
  ];

  const currentThemeData = themes.find(t => t.key === theme) || themes[2];

  return (
    <div className="relative">
      {/* Theme Toggle Button - Enhanced for mobile */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-cream-dark dark:bg-dark-tertiary text-gray-text dark:text-dark-text hover:bg-gold-primary hover:text-white transition-colors text-sm font-medium"
        aria-label="Change theme"
      >
        <span className="w-5 h-4 flex items-center justify-center text-base">{currentThemeData.icon}</span>
        <span>{currentThemeData.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Theme Dropdown - Enhanced for mobile with backdrop */}
      {isDropdownOpen && (
        <>
          {/* Backdrop for mobile to close dropdown */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-white dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-dark-border z-50 max-h-60 overflow-y-auto">
            {themes.map((themeOption) => (
              <button
                key={themeOption.key}
                onClick={() => {
                  setTheme(themeOption.key);
                  setIsDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-center space-x-3 px-4 py-3 text-left hover:bg-gold-primary hover:text-white transition-colors text-sm ${
                  theme === themeOption.key ? 'bg-gold-primary/10 text-gold-primary' : 'text-gray-text dark:text-dark-text'
                }`}
              >
                <span className="w-5 h-4 flex items-center justify-center text-base">{themeOption.icon}</span>
                <span className="font-medium">{themeOption.label}</span>
                {theme === themeOption.key && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}