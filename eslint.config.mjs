import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Global Ignores
  {
    ignores: ['.next/**', 'next-env.d.ts', 'out/**', 'build/**', '*.js'],
  },
  // 2. Extend Next.js Configs
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
