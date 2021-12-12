const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    // 图片输出文件名
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
      // webpack@5资源模块
      {
        test: /\.(jpeg|png|jpg|gif|webp|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.(ttf|woff)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              // 字体图标输出文件名
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  optimization: {
    chunkIds: 'named',
    usedExports: true,
  },
});
