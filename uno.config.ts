import {type CSSEntry, defineConfig, presetWind4, type UtilObject} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetWind4({}),
  ],
  theme: {
    colors: {
      // Terminal contexts
      'screen': 'var(--solarized-bg-primary)',
      'chrome': 'var(--solarized-bg-secondary)',
      'selection': 'var(--solarized-bg-highlight)',
      'body': 'var(--solarized-text-primary)',
      'dim': 'var(--solarized-text-secondary)',
      'bright': 'var(--solarized-text-emphasized)',
      'prompt': 'var(--solarized-prompt)',
      'success': 'var(--solarized-success)',
      'warning': 'var(--solarized-warning)',
      'error': 'var(--solarized-error)',
      'link': 'var(--solarized-link)',
      'accent': 'var(--solarized-accent)',
      'line': 'var(--solarized-border)'
    },
    font: {
      mono: 'var(--font-terminal-mono)',
      sans: 'var(--font-terminal-ui)',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600'
    }
  },
  rules: [
    ['shadow-card', { 'box-shadow': '0 4px 20px rgba(0, 0, 0, 0.5)' }],
  ],
  shortcuts: {
    'terminal-text': 'font-mono text-body line-height-[1.2]',
    'prompt-text': 'font-mono text-prompt font-medium',
    'ui-text': 'font-sans text-dim',
  },
  transformers: [
    transformerDirectives(),
  ],
})
