const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: ['../src/main.ts'],
  },
  // stats: 'errors-warnings',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    // 打包前清除dist目录下的资源文件
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
    extensions: ['.ts', '.js', '.vue', '...'],
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
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
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              // 仅转译，加快编译速度
              transpileOnly: true,
              // appendTsSuffixTo: [/\.vue$/],
              // transpileOnly: true,
              // experimentalWatchApi: true,
              // happyPackMode: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      context: path.resolve(__dirname),
      minify: false,
      title: '手动创建vue项目',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    // TODO:
    // new ESLintPlugin(),
  ],
};
