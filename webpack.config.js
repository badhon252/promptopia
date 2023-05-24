module.exports = {
  // ... other webpack config options
  module: {
    rules: [
      {
        test: /\.(node)$/,
        use: "node-loader",
      },
    ],
  },
};
