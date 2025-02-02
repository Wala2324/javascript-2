import js from '@eslint/js'
import globals from 'globals"
import react from 'eslint-plugin-react' 
import reactlooks from 'eslint-plugin-react-hooks' 
import reactRefresh from 'eslint-plugin-react-refresh' 
import { warn } from 'console'
export default [
{ ignores: ["dist" ]},
{
    files:  ['**/*. (3s,Jsx)'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
            ecmaaVersion: 'latest'
            ecmaFeatures: { jsx: true },
            sourceType: 'module',
        },
    },
    settings: { react: {version: '18.3' } },
    plugin: {
        react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, 
      ...react.configs.recomended. rules, 
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recomended.rules,
        'react/jsx-no-target-blank':'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
}
]