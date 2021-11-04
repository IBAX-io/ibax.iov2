/*
 * @Author: abc
 * @Date: 2021-08-18 09:41:43
 * @LastEditors: abc
 * @LastEditTime: 2021-08-30 14:54:47
 * @Description:
 */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'comment-empty-line-before': null,
    'selector-pseudo-element-colon-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-unknown': null,
    'media-feature-colon-space-after': null,
    'no-duplicate-selectors': null,
    'length-zero-no-unit': null
  }
};
