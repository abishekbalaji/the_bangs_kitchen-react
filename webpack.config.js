const path = require("path");
const MiniExtractTextPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new MiniExtractTextPlugin({
    filename: "styles.css",
    chunkFilename: "chunk.css",
  });
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: "development",
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniExtractTextPlugin.loader,
              options: {
                publicPath: path.join(__dirname, "public"),
              },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader?limit=100000",
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};

// [
//   {
//     loader: "style-loader",
//   },
//   {
//     loader: "css-loader",
//   },
//   {
//     loader: "sass-loader",
//   },
// ],
