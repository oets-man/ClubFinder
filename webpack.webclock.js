const { merge } = require("webpack-merge");
const common = require("./webpack.all.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  entry: {
    webclock: "./webclock.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/webclock"),
    filename: "index.js",
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./webclock.html",
      filename: "index.html",
    }),
  ],
});
