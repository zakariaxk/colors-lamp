module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    md5: 'readonly'
  },
  extends: ['@eslint/js/recommended'],
  overrides: [
    {
      files: ['js/code.js'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ]
};
