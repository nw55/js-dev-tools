'use strict';

module.exports = {
    root: true,
    ignorePatterns: [
    ],
    env: {
        node: true,
        es2020: true
    },
    extends: './packages/eslint-config/build/es',
    overrides: [{
        files: ['./packages/dev-tools/fix-dts-bundle.js'],
        rules: {
            'linebreak-style': 'error'
        }
    }]
};
