module.exports = {
  // Other Webpack configuration options...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.node$/,
        use: [
          {
            loader: "node-loader",
          },
        ],
      },
    ],
  },
};
