/*
 * @Author: abc
 * @Date: 2021-01-08 14:39:29
 * @LastEditors: abc
 * @LastEditTime: 2021-11-15 19:15:34
 * @Description:axios
 */
import { Message } from 'element-ui';
import { handleTokenCookie } from '../assets/js/public';
// import qs from "qs";
export default function ({ $axios, redirect, store }) {
  $axios.onRequest(
    (config) => {
      //  console.log(store.state.token);
      if (store.state.token) {
        // console.log(store.state.token);
        config.headers.Authorization = store.state.token;
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
    console.log(response);
    return response;
  });
  $axios.onError((error) => {
    console.log(error.response);
    store.commit('handleChangeToken', '');
    handleTokenCookie('token', '', -1);
    /* const code = parseInt(error.response && error.response.status);
    Message.error({
      message: `Data call error, status code：${code}`,
      showClose: true
    }); */
  });
}
