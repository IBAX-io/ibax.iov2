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
  userInfo: '',
  invitecode: '',
  statistics: {
    points: 0,
    amount: 0,
    gitAmount: 0,
    weekAmount: 0,
    level: '',
    time: ''
  }
});
export const mutations = {
  handleChangeLang(state, lang) {
    if (state.locales.includes(lang)) {
      state.lang = lang;
    }
  },
  handleChangeInvitecode(state, code) {
    state.invitecode = code;
  },
  handleChangeToken(state, token) {
    state.token = token;
  },
  handleUserInfo(state, obj) {
    console.log(obj);
    state.userInfo = obj;
  },
  handleStatistics(state, obj) {
    state.statistics.points = obj.points;
    state.statistics.amount = obj.amount;
    state.statistics.gitAmount = obj.gitAmount;
    state.statistics.weekAmount = obj.weekAmount;
    state.statistics.level_icon = obj.level_icon;
    state.statistics.time = obj.time;
  },
  handleInviteAmount(state, obj) {
    state.amount = obj.statistics;
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
  nuxtClientInit({ dispatch, commit }, context) {
    // code
    const invitecode = localStorage.getItem('invitecode');
    commit('handleChangeInvitecode', invitecode);
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
        commit('handleChangeToken', token);
      } else {
        commit('handleChangeToken', '');
      }
    }
  },
  async handleGetTwitterUser({ commit }) {
    const res = await this.$axios.$post('/tw/getuser');
    // console.log(res);
    if (res.code === 0) {
      commit('handleUserInfo', res.data);
    } else {
      commit('handleChangeToken', '');
      handleTokenCookie('token', '', -1);
    }
  },
  async handleGetStatistics({ commit }) {
    const data = await this.$axios.$post('/tw/get_statistics');
    // console.log(res);
    if (data.code === 0) {
      const obj = {
        points: data.data.points_statistics,
        amount: data.data.invite_statistics,
        gitAmount: data.data.github_statistics,
        weekAmount: data.data.this_week_statistics,
        time: data.data.next_check_in_time,
        level_icon: data.data.level_icon
      };
      commit('handleStatistics', obj);
    } else {
      commit('handleChangeToken', '');
      handleTokenCookie('token', '', -1);
    }
  },
  async handleGetGithubUser({ commit }) {
    const res = await this.$axios.$post('/github/getuser');
    // console.log(res);
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
    return lang;
  },
  handleToken(state) {
    const { token } = state;
    return token;
  },
  handleInvitecode(state) {
    const { invitecode } = state;
    return invitecode;
  },
  handleUserInfo(state) {
    const { userInfo } = state;
    return userInfo;
  },
  handleHeaderColor(state) {
    const { headerColor } = state;
    return headerColor;
  },
  handleColor(state) {
    const { color } = state;

    return color;
  },
  handlePopperClass(state) {
    const { domClass } = state;

    return domClass;
  },
  handleBoxShadow(state) {
    const { boxShadow } = state;

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
  },
  handleStatistics(state) {
    const { statistics } = state;
    return statistics;
  }
};
