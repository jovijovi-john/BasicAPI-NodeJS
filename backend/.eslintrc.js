module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        // eslint-disable-next-line prettier/prettier
        'camelcase': 'off',
        'no-underscore-dangle': 'off',
        // eslint-disable-next-line prettier/prettier
        'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    },
};
