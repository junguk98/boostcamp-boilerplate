const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    proxy: {
      "/api": "http://localhost:8080",
    },
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        mode: "DEV",
      },
    }),
  ],
});
