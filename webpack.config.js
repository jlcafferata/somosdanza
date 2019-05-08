const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    publicPath: "/dst/",
    port: 3005,
    historyApiFallback: true //para que no vaya al http server a buscar la ruta
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dst"),
    filename: "bundle.js"
  }
};
