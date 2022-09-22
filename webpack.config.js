const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    webclock: "./webclock.js",
    // clubfinder: "./app.js",
  },
  output: {
    // path: path.resolve(__dirname, "output"),
    // filename: "[index].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./webclock.html",
      filename: "webclock-template.html",
    }),
  ],
};
