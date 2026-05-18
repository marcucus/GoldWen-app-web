/**
 * useABVariant — simple env-based A/B variant hook.
 *
 * Reads `NEXT_PUBLIC_AB_<EXPERIMENT>` (uppercased).
 * Returns 'b' when the env var is exactly 'b', otherwise defaults to 'a'.
 *
 * Usage:
 *   const variant = useABVariant('hero');  // reads NEXT_PUBLIC_AB_HERO
 *   if (variant === 'b') { ... }
 */
export function useABVariant(experiment: string): 'a' | 'b' {
  const key = `NEXT_PUBLIC_AB_${experiment.toUpperCase()}`;
  const value = process.env[key];
  return value === 'b' ? 'b' : 'a';
}
