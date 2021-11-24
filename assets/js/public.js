import Cookie from 'js-cookie';
// translate router.meta.title, be used in breadcrumb sidebar tagsview
/**
 * @name: handleGenerateTitle
 * @test: test font
 * @description
 * @param {type} { type }
 * @return: title
 */
export function handleGenerateTitle(title) {
  const hasKey = this.$te(title);
  const translatedTitle = this.$t(title); // $t :this method from vue-i18n, inject in @/lang/index.js
  if (hasKey) {
    return translatedTitle;
  }
  return title;
}
/**
 * @name: handle
 * @test: test font
 * @description:
 * @param {type} { type }
 * @return:
 */
export function generateSkinColor(color) {
  const hasKey = this.$te('skin.' + color);
  const translatedTitle = this.$t('skin.' + color); // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle;
  }
  return color;
}
/**
 * @name: handleGetLang
 * @description: localStorag
 * @param {type} :{ no }
 * @return: {type:string}
 */
export function handleGetLang() {
  const objLang = Cookie.get('lang');
  let str = '';
  if (objLang) {
    // str = JSON.parse(decodeURIComponent(objLang)).lang;
    str = JSON.parse(objLang).lang;
    return str;
  } else {
    return 'en';
  }
}
// cooki
export function handleGetCookie(str) {
  const objUser = Cookie.get(str);
  let obj = {};
  if (objUser) {
    obj = JSON.parse(decodeURIComponent(objUser));
    return obj;
  } else {
    return obj;
  }
}
/**
 * @name: handleSaveCookies
 * @description cooki
 * @param {str} :{ string }
 * @param {objdata} :{ object or array }
 * @param {time} :{ number }
 * @return:
 */
export function handleSaveCookie(str, objdata, time) {
  // const strData = encodeURIComponent(JSON.stringify(objdata));
  const strData = JSON.stringify(objdata);
  Cookie.set(str, strData, { expires: time });
}
/**
 * @name: handleTokenCookie
 * @description cooki
 * @param {str} :{ string }
 * @param {objdata} :{ object or array }
 * @param {time} :{ number }
 * @return:
 */
export function handleTokenCookie(str, token, time) {
  const encode = encodeURIComponent(token);
  Cookie.set(str, encode, { expires: time });
}
// get token
export function handleGetTokenCookie() {
  const token = Cookie.get('token');
  let str = '';
  if (token) {
    str = decodeURIComponent(token);
    return str;
  } else {
    return '';
  }
}
/**
 * @name: handleSaveStorage
 * @description cooki
 * @param {str} :{ string }
 * @param {objdata} :{ object or array }
 * @param {time} :{ number }
 * @return:
 */
export function handleSaveStorage(str, token) {
  // const strData = encodeURIComponent(JSON.stringify(objdata));
  if (process.client) {
    localStorage.setItem(str, token);
  }
}
// get token
export function handleGetStorage() {
  if (process.client) {
    const token = localStorage.getItem('token');
    let str = '';
    if (token) {
      // str = JSON.parse(decodeURIComponent(objLang)).lang;
      str = token;
      return str;
    } else {
      return '';
    }
  }
}
