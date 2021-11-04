/*
 * @Author: abc
 * @Date: 2020-12-18 09:49:47
 * @LastEditors: abc
 * @LastEditTime: 2020-12-30 18:58:08
 * @Description:
 */
export default ({ app: { router }, store }) => {
  if (process.client) {
    console.log(window.dataLayer);
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-inner-declarations
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-3P74G75LD1");
  }
};
