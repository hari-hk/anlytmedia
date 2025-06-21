import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

/*
  If you want to include rules based on your tsconfig file, you typically need to use a TypeScript-aware ESLint plugin like @typescript-eslint.
  Here's how you might add rules that are influenced by your tsconfig.json:
*/

eslintConfig.push({
  // Example: Add TypeScript-specific rules here
  rules: {
    // Example rule: require explicit return types on functions
    '@typescript-eslint/no-explicit-any': 'off',
    // Example rule: disallow unused variables
    '@typescript-eslint/no-unused-vars': ['error'],
  },
});
