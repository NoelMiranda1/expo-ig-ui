import expoConfig from 'eslint-config-expo/flat.js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  expoConfig,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
        },
      ],
      'no-use-before-define': 'on',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
          allowNamedExports: false,
        },
      ],
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'max-len': ['error', { code: 100, ignoreComments: true, ignoreStrings: true }],
    },
  },
  {
    ignores: ['dist/*', 'node_modules/*', '.expo/*'],
  },
]);