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
        test: /\.(sc|c)ss$/i,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {},
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpeg|png|jpg|gif|webp|svg|ttf)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[hash:8].[name].[ext]',
              limit: 1024 * 8,
              esModule: false,
            },
          },
        ],
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
