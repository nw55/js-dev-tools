'use strict';

const buildConfig = require('./eslint-config');

module.exports = {
    ...buildConfig,
    extends: './eslint/dev/es'
};
