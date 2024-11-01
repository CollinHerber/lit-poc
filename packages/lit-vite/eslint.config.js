import * as parser from '@typescript-eslint/parser';
import * as ymlParser from'yaml-eslint-parser';
import * as eslintPluginYml from 'eslint-plugin-yml';

export default [
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts'],

        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: parser,
            parserOptions: {
                allowImportExportEverywhere: true
            },
            globals: {
                browser: true
            }
        },

        plugins: {
            '@lwc/eslint-plugin-lwc': ['error', 'warn', 'off'],
            '@locker/eslint-plugin-locker': ['error', 'warn', 'off'],
        },

        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'no-else-return': 'error',
            'prefer-object-has-own': 'warn',
            'consistent-return': 'warn',
            'guard-for-in': 'warn',
            'object-curly-spacing': ['error', 'always']
        },

        ignores: [
            '**/*.d.ts',
            '**/dist/**',
            '**/dependencies/**',
            '**/coverage/**',
        ]
    },
    ...eslintPluginYml.configs['flat/prettier'],
    {
        files: ['*.yaml', '*.yml'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parser: ymlParser
        }
    }
];
