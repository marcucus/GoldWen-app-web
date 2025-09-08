import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Cycle through themes: system -> light -> dark -> system
  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  // Get the appropriate icon for the current theme
  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
      default:
        return '💻';
    }
  };

  // Get theme label for accessibility
  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light theme';
      case 'dark':
        return 'Dark theme';
      case 'system':
      default:
        return 'System theme';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-auto flex items-center justify-center p-3 rounded-lg bg-cream-dark dark:bg-dark-tertiary text-gray-text dark:text-dark-text hover:bg-gold-primary hover:text-white transition-colors"
      aria-label={`Current: ${getThemeLabel()}. Click to change theme`}
      title={`Current: ${getThemeLabel()}`}
    >
      <span className="w-6 h-5 flex items-center justify-center text-lg">
        {getThemeIcon()}
      </span>
    </button>
  );
}