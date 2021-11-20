/*
 * @Author: abc
 * @Date: 2021-11-20 18:35:58
 * @LastEditors: abc
 * @LastEditTime: 2021-11-20 20:06:55
 * @Description:
 */

const api = {
  prod: 'https://ibax.io/api',
  test: 'https://testnet-us-34-86-177-19.ibax.io/api'
};
const baseURL = api[process.env.NUXT_ENV.MODE];
export default baseURL;
