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
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-gray-text dark:text-dark-text hover:text-gold-primary transition-all duration-300 p-2 rounded-lg hover:bg-cream-dark dark:hover:bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-opacity-50"
        aria-label="Toggle theme"
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{currentThemeData.icon}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Theme Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-cream-dark dark:border-dark-tertiary z-50">
          <div className="py-1">
            {themes.map((themeOption) => (
              <button
                key={themeOption.key}
                onClick={() => {
                  setTheme(themeOption.key);
                  setIsDropdownOpen(false);
                }}
                className={`flex items-center w-full px-4 py-2 text-sm transition-colors ${
                  theme === themeOption.key
                    ? 'bg-gold-primary text-white'
                    : 'text-gray-text dark:text-dark-text hover:bg-cream-light dark:hover:bg-dark-tertiary'
                }`}
              >
                <span className="mr-3 text-lg">{themeOption.icon}</span>
                {themeOption.label}
                {theme === themeOption.key && (
                  <svg className="ml-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}