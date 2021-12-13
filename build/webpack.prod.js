const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/chunk-[name].[contenthash:8].js',
    assetModuleFilename: 'images/[name].[contenthash:8][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
              name: 'fonts/[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/chunk-[name].[contenthash:8].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '../public/favicon.ico',
          to: '../dist/',
        },
      ],
    }),
  ],
  optimization: {
    concatenateModules: true,
    providedExports: true,
    usedExports: true,
    // 使用webpack内置TerserPlugin压缩bundle
    minimize: true,
    removeAvailableModules: false,
    chunkIds: 'deterministic',
    // 在所有生成chunk之间共享的运行时文件
    runtimeChunk: {
      name: 'runtime',
    },
    // 对于动态导入模块，按需加载的chunk
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          // 控制此缓存组选择的模块
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    // '...' 使用webpack@5默认js压缩工具TerserPlugin
    minimizer: [new CssMinimizerPlugin(), '...'],
    // minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
});
