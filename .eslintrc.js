module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', 'standard'],
  plugins: ['html', 'prettier', 'import', 'babel'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', 'never'],
  },
  globals: {},
}
