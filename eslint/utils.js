'use strict';

function repalceWithDev(id) {
    return id.replace('@nw55/dev-tools/eslint/build', '@nw55/dev-tools/eslint/dev');
}

module.exports = {
    addDevConfig(config, devConfigKey = '_devconfig') {
        Object.defineProperty(config, '_devconfig', {
            value: {
                ...config,
                extends: config.extends.map(repalceWithDev)
            },
            enumerable: false
        });
        return config;
    }
};
