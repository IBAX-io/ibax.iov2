import { Message } from 'element-ui';
import { handleSaveCookie } from '../assets/js/public';
import baseURL from '../config/api';
console.log(baseURL);
export default function ({ $axios, redirect, store }) {
  $axios.onRequest(
    (config) => {
      //  console.log(config);
      if (process.env.NODE_ENV === 'production') {
        config.baseURL = baseURL;
      }
      if (store.state.token) {
        config.headers.Authorization = store.state.token;
      }
      if (config.method === 'get') {
        config.params = {
          //  _t: Date.parse(new Date()) / 1000,
          ...config.params
        };
      }
      config.headers['Content-Type'] = 'application/json';
      config.headers.Accept = 'application/json';
      config.retry = 4;
      config.retryDelay = 1000;
      config.timeout = 60000;
      return config;
    },
    (err) => {
      Message.error({ content: err.message });
    }
  );
  $axios.onResponse((response) => {
    const { code } = response.data;
    if (code === 401 || code === -402) {
      redirect('/login');
      handleSaveCookie('token', '', -1);
    } else {
      return response;
    }
  });
  $axios.onError((error) => {
    console.log(error.response);
  });
}
