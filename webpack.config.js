const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "./src/app/index.js"),
    details: path.resolve(__dirname, "./src/app/movie-details.js"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 1337,
    compress: true,
    open: true,
    hot: false,
    //liveReload: true,
    historyApiFallback: {
      index: "/movies.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "movies.html",
      template: "./src/app/movies.html",
      inject: true,
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "movie-details.html",
      template: "./src/app/movie-details.html",
      inject: true,
      chunks: ["details"],
    }),
  ],
};