/*
 * @Author: abc
 * @Date: 2021-01-08 14:39:29
 * @LastEditors: abc
 * @LastEditTime: 2021-11-20 18:55:19
 * @Description:axios
 */
import { Message } from 'element-ui';
import { handleSaveCookie } from '../assets/js/public';
import baseURL from '../config/api';
// import qs from "qs";
export default function ({ $axios, redirect, store }) {
  $axios.onRequest(
    (config) => {
      // console.log(baseURL);
      if (process.env.NUXT_ENV === 'production') {
        config.baseURL = baseURL;
      }
      console.log(process.env.NUXT_ENV.MODE);
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
    // console.log(response);
    const { code } = response.data;
    //  console.log(code);
    if (code === 401 || code === -402) {
      Message.error({
        message: `Login failed, please log in again(${code})`,
        onClose: () => {
          redirect('/login');
          handleSaveCookie('token', '', -1);
        }
      });
    } else {
      return response;
    }
  });
  $axios.onError((error) => {
    console.log(error.response);
    /* 
    store.commit('handleChangeToken', '');
    localStorage.removeItem('token'); */
    /* const code = parseInt(error.response && error.response.status);
    Message.error({
      message: `Data call error, status code：${code}`,
      showClose: true
    }); */
  });
}
