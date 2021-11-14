const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/main.js'],
  },
  devServer: {
    static: 'dist',
    port: 9000,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js',
    clean: true,
    assetModuleFilename: 'images/[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                whitespace: 'condense',
              },
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/i,
        use: ['vue-style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpeg|png|jpg|gif|webp|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '手动创建vue3项目',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
};
