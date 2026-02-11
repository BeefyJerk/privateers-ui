import { Config } from 'tailwindcss';

/**
 * Privateers Design System Tailwind Preset
 *
 * Use this preset in your tailwind.config.ts:
 *
 * ```ts
 * import { privateersPreset } from '@privateers/ui/tailwind/preset'
 *
 * export default {
 *   presets: [privateersPreset],
 *   // ... your config
 * }
 * ```
 */
declare const privateersPreset: Partial<Config>;

export { privateersPreset as default, privateersPreset };
