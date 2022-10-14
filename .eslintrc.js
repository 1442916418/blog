module.exports = {
  root: true,
  extends: [],
  parserOptions: {
    project: './tsconfig.json'
  },
  globals: {
    __isBrowser__: 'readonly'
  }
}
