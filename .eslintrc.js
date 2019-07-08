// TODO: expand configuration and autoformat on save
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  /*settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },*/
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
    'jest-enzyme'
  ],

  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false
      }
    ],
    'react/jsx-max-depth': [
      'error',
      {
        max: 5
      }
    ],
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
      }
    ],
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['warning', 'absolute-first'],
    'import/newline-after-import': 'warning',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 0,
    'react/no-unused-state': 0,
    'react/no-access-state-in-setstate': 0,
    'react/require-default-props': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-unused-expressions': 0,
    'arrow-body-style': 0,
    'react/no-did-update-set-state': 0,
    'class-methods-use-this': 0,
    'prefer-destructuring': 0,
    'no-useless-constructor': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'default-case': 0,
    'import/prefer-default-export': 0,
    'spaced-comment': 0,
    curly: [2, 'multi-line'],
    'brace-style': 'error',
    'import/order': 0,
    'import/first': 0,
    'import/no-unresolved': 0,
    // todo: enable on production
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'no-console': 0,
    'object-shorthand': 0,
    'import/no-extraneous-dependencies': 0
  }
};
