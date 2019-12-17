import * as webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html"
});

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
      {
        exclude: [/\.(js|ts|jsx|tsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;