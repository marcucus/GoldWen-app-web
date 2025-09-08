import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Cycle through themes: light -> dark -> light
  const cycleTheme = () => {
    if (theme === 'light' || theme === 'system') {
      setTheme('dark');
    } else {
      setTheme('light');
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
        return '☀️'; // Default to light when system
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
        return 'Light theme'; // Default to light when system
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cream-dark to-cream-light dark:from-dark-tertiary dark:to-dark-secondary text-gray-text dark:text-dark-text hover:from-gold-primary hover:to-gold-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/50 border border-gold-primary/20"
      aria-label={`Current: ${getThemeLabel()}. Click to change theme`}
      title={`Current: ${getThemeLabel()}`}
    >
      <span className="text-xl transition-transform group-hover:scale-110">
        {getThemeIcon()}
      </span>
      <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-gold-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
}