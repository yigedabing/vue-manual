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
    // 解决history模式下页面刷新404现象
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js',
    // 打包前清除dist目录下的资源文件
    clean: true,
    // 图片输出文件名
    assetModuleFilename: 'images/[name][ext][query]',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
              name: 'font/[name].[ext][query]',
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
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico'),
    }),
  ],
};
