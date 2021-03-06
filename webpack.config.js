const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".webpack.js",
      ".web.js",
      ".mjs",
      ".js",
      ".json"
    ]
  },
  output: {
    publicPath: "/", // base path for all assets
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  devServer: {
    historyApiFallback: true, // redirect 404s to index.html
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
