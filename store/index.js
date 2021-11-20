/*
 * @Author: abc
 * @Date: 2021-09-07 14:08:14
 * @LastEditors: abc
 * @LastEditTime: 2021-11-20 18:09:18
 * @Description:
 */
import { handleTokenCookie } from '../assets/js/public';
export const state = () => ({
  headerColor: '#274235',
  color: '#fff',
  locales: ['zh', 'en', 'tw'],
  lang: 'en',
  domClass: 'subMenu--horizontal',
  isTop: true,
  isFixed: false,
  isWhite: true,
  token: '',
  userInfo: ''
});
export const mutations = {
  handleChangeLang(state, lang) {
    if (state.locales.includes(lang)) {
      state.lang = lang;
    }
  },
  handleChangeToken(state, token) {
    //  console.log(token);
    state.token = token;
  },
  handleUserInfo(state, obj) {
    console.log(obj);
    state.userInfo = obj;
  },
  handleChangeColor(state, { headerColor, color }) {
    state.headerColor = headerColor;
    state.color = color;
  },
  handleChangeClass(state, domClass) {
    state.domClass = domClass;
  },
  handleBoxShadow(state, boxShadow) {
    state.boxShadow = boxShadow;
  },
  handleIsTop(state, boo) {
    state.isTop = boo;
  },
  handleIsFixed(state, boo) {
    state.isFixed = boo;
  },
  handleIsWhite(state, boo) {
    state.isWhite = boo;
  }
};

export const actions = {
  // nuxtClientInit
  nuxtClientInit({ dispatch, commit }, context) {
    // code
  },
  // nuxtServerIni Nuxt.js
  nuxtServerInit({ dispatch, commit }, { req }) {
    if (req.headers.cookie && req.headers) {
      const strCookie = req.headers.cookie;
      const serviceCookie = {};
      strCookie.split(';').forEach(function (val) {
        const parts = val.split('=');
        serviceCookie[parts[0].trim()] = (parts[1] || '').trim();
      });
      console.log(serviceCookie.token);
      const { token } = serviceCookie;

      if (token) {
        // console.log(token);
        commit('handleChangeToken', token);
      } else {
        commit('handleChangeToken', '');
      }
    }
  },
  async handleGetUser({ commit }) {
    const res = await this.$axios.$post('/tw/getuser');
    console.log(res);
    if (res.code === 0) {
      commit('handleUserInfo', res.data);
    } else {
      commit('handleChangeToken', '');
      handleTokenCookie('token', '', -1);
    }
  },
  handleActionsToken({ commit }, token) {
    commit('handleChangeToken', token);
  }
};
export const getters = {
  handdleLang(state) {
    const { lang } = state;
    // console.log(authUser);
    return lang;
  },
  handleToken(state) {
    const { token } = state;
    return token;
  },
  handleUserInfo(state) {
    const { userInfo } = state;
    return userInfo;
  },
  handleHeaderColor(state) {
    const { headerColor } = state;
    // console.log(authUser);
    return headerColor;
  },
  handleColor(state) {
    const { color } = state;
    // console.log(authUser);
    return color;
  },
  handlePopperClass(state) {
    const { domClass } = state;
    // console.log(authUser);
    return domClass;
  },
  handleBoxShadow(state) {
    const { boxShadow } = state;
    // console.log(authUser);
    return boxShadow;
  },
  handleIsTop(state) {
    const { isTop } = state;
    return isTop;
  },
  handleIsFixed(state) {
    const { isFixed } = state;
    return isFixed;
  },
  handleIsWhite(state) {
    const { isWhite } = state;
    return isWhite;
  }
};
