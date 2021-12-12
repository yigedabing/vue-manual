const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: ['../src/main.ts'],
  },
  // https://webpack.js.org/configuration/stats/#root
  stats: 'minimal',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    // 打包前清除dist目录下的资源文件
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
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
            cacheDirectory: true,
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
              // .vue文件添加ts后缀，否则无法正常识别单文件vue中的script标签中的代码
              appendTsSuffixTo: [/\.vue$/],
              useCaseSensitiveFileNames: true,
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
    new ForkTsCheckerPlugin({
      formatter: 'codeframe',
      typescript: {
        configFile: '../tsconfig.json',
        extensions: {
          vue: {
            enabled: true,
            compiler: 'vue-template-compiler',
          },
        },
      },
      eslint: {
        files: ['../src/**/*.ts', '../src/*.ts', '../src/**/*.vue'],
        enabled: true,
      },
    }),
  ],
};
