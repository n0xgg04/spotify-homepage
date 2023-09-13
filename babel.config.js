module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module-resolver", {
        "alias": {
          "@navigation": "./navigation",
          "@components": "./components",
          "@screens": "./screens",
          "@stores": "./stores",
          "@assets": "./assets"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};
