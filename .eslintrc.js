'use strict';

const buildConfig = require('./eslint-config');

module.exports = {
    ...buildConfig,
    extends: './packages/eslint-config/dev/es'
};
