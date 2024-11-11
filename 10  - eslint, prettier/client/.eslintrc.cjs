module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  overrides: [
    {
      files: ['src/**/*.js[x]'],

    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'warn',
    'react/function-component-definition': ['warn', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],
    'import/prefer-default-export': ['off'],
    'react/react-in-jsx-scope': ['off'],
  },
};
