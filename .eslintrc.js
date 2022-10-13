module.exports = {
  root: true,
  extends: [
    'standard-vue-ts'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  globals: {
    __isBrowser__: 'readonly'
  }
}
