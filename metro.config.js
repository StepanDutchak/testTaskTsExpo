const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig(__dirname);
    // Your customizations here
    return {
        ...defaultConfig,
        // Your customizations here
    };
})();
