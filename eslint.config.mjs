import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true, // установите true, если используете TypeScript

  // Игнорируем Nuxt специфичные директории
  ignores: [
    '.nuxt/',
    'node_modules/',
    'dist/',
    '.output/',
    '.nitro/',
    '.cache/',
  ],

  rules: {
    // Nuxt-friendly правила
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-console': 'warn',
  },
})
