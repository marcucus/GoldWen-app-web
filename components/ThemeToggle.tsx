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
      {/* Theme Toggle Button - Now matches language selector style */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-cream-dark dark:bg-dark-tertiary text-gray-text dark:text-dark-text hover:bg-gold-primary hover:text-white transition-colors text-sm"
        aria-label="Change theme"
      >
        <span className="text-lg">{currentThemeData.icon}</span>
        <span className="hidden sm:inline">{currentThemeData.label}</span>
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

      {/* Theme Dropdown - Now matches language selector style */}
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 py-1 bg-white dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-dark-border z-50 min-w-[120px]">
          {themes.map((themeOption) => (
            <button
              key={themeOption.key}
              onClick={() => {
                setTheme(themeOption.key);
                setIsDropdownOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-gold-primary hover:text-white transition-colors text-sm ${
                theme === themeOption.key ? 'bg-gold-primary/10 text-gold-primary' : 'text-gray-text dark:text-dark-text'
              }`}
            >
              <span className="text-lg">{themeOption.icon}</span>
              <span>{themeOption.label}</span>
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