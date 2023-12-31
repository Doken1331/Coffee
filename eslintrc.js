module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/one-component-per-file': 'off',
        'vue/no-unused-vars': 'error',
        'vue/html-indent': ['error', 4],
        'vue/object-curly-spacing': ['error', 'never'],
        'vue/quote-props': 'off',
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 2,
            },
            'multiline': {
                'max': 1,
            },
        }],
        'vue/no-v-html': 'off',
        'vue/no-parsing-error': ['error', {
            'missing-semicolon-after-character-reference': false,
        }],
        'vue/no-dupe-keys': ['off', {
            'groups': [],
        }],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        quotes: ['error', 'single'],
        'max-len': ['error', {code: 120}],
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-debugger': 'error',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'object-curly-spacing': ['error', 'never'],
        'no-trailing-spaces': ['error', {'ignoreComments': true}],
    },
};
