/*
 * @Author: abc
 * @Date: 2021-08-16 11:14:27
 * @LastEditors: abc
 * @LastEditTime: 2021-08-17 15:29:56
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 0,
    'array-callback-return': 0
  }
};
