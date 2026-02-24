import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [

    // Base JavaScript rules
    js.configs.recommended,

    // TypeScript recommended rules
    ...tseslint.configs.recommended,

    {
        files: ['**/*.{ts,js}'],

        languageOptions: {
            globals: globals.node,
            parser: tseslint.parser,
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
        },

        rules: {
            // Estilo
            semi: ['warn', 'always'],
            indent: ['error', 4],
            quotes: ['error', 'single'],

            // TypeScript
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
];


