'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/semi': 'warn',
    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    'quote-props': [ 2, 'as-needed'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['error', 'always']
  },
  ignorePatterns: [
    'out',
    'dist',
    '**/*.d.ts'
  ]
};
