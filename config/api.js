const api = {
  prod: 'https://ibax.io/api',
  test: 'https://testnet-us-34-86-177-19.ibax.io/api',
  dev: 'https://testnet-us-34-86-177-19.ibax.io/api'
};
const baseURL = api[process.env.NUXT_ENV.MODE];
export default baseURL;
