const { merge } = require("webpack-merge");
const common = require("./webpack.all.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  entry: {
    clubfinder: "./app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/clubfinder"),
    filename: "index.js",
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
});
