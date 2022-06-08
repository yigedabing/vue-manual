// eslint-disable-next-line no-undef
module.exports = {
  // parser: '@typescript-eslint/parser',
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // 0 = off, 1 = warn, 2 = error
    // place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    // https://eslint.vuejs.org/rules/
    'vue/component-definition-name-casing': 'off',
    'vue/multi-word-component-names': 'off',
    ' @typescript-eslint/no-this-alias': 'off',
  },
};
