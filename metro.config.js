const { getDefaultConfig } = require('expo/metro-config');

const defaculConfig = getDefaultConfig(__dirname);
defaculConfig.resolver.sourceExts.push('cjs');

module.exports = defaculConfig;