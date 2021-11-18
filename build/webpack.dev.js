const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
    port: 9000,
    hot: true,
    // 解决history模式下页面刷新404现象
    historyApiFallback: true,
    client: {
      progress: true,
    },
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
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`=================== 开发环境编译成功！ =================`],
      },
      clearConsole: true,
    }),
  ],
  optimization: {
    chunkIds: 'named',
  },
});
