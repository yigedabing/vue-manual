module.exports = {
  plugins: [
    // 添加css样式前缀，下面2个插件二选一
    // postcss-preset-env includes autoprefixer,so adding it separately is not necessary if you already use the preset.
    ['postcss-preset-env', {}],
    // ['autoprefixer', {}],
  ],
};
