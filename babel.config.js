module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          paths: [
            {
              rootPathPrefix: "@services",
              rootPathSuffix: "./src/services",
            },
            {
              rootPathPrefix: "@assets",
              rootPathSuffix: "./assets",
            },
            {
              rootPathPrefix: "@styles",
              rootPathSuffix: "./src/styles",
            },
            {
              rootPathPrefix: "@components",
              rootPathSuffix: "./src/components",
            },
            {
              rootPathPrefix: "@account",
              rootPathSuffix: "./src/Account",
            },
            {
              rootPathPrefix: "@cards",
              rootPathSuffix: "./src/Cards",
            },
          ],
        },
      ],
    ],
  };
};
