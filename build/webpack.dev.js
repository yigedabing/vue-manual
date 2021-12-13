const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  devServer: {
    static: 'dist',
    compress: false,
    port: 9001,
    hot: true,
    // 解决history模式下页面刷新404现象
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/color.less'),
            },
          },
        ],
      },
      // webpack@5资源模块 图片
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
      },
      // 等价于file-loader处理 svg
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
      },
      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      // TODO:
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      //   type: 'asset',
      //   generator: {
      //     filename: 'fonts/[name].[ext]',
      //   },
      // },
    ],
  },
  plugins: [],
  optimization: {
    chunkIds: 'named',
    usedExports: true,
  },
});
