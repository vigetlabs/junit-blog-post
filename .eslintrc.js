module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    jasmine: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: [],
  rules: {
    semi: ['warn', 'never'],
    'no-console': 'off',
    'no-debugger': process.env.CI ? 'error' : 'off',
    'no-unused-vars': [
      1,
      { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_' }
    ]
  }
}
