/*
 * @Author: abc
 * @LastEditors: abc
 * @Description:
 * @Date: 2019-04-10 14:49:19
 * @LastEditTime: 2021-11-11 16:49:08
 */
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
  Cookie.set(str, token, { expires: time });
}
// get token
export function handleGetToken() {
  const token = Cookie.get('token');
  let str = '';
  if (token) {
    // str = JSON.parse(decodeURIComponent(objLang)).lang;
    str = token;
    return str;
  } else {
    return '';
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
export function handleSaveStorage(str, token) {
  // const strData = encodeURIComponent(JSON.stringify(objdata));
  if (process.client) {
    localStorage.setItem(str, token);
  }
}
/**
 * @name: handleCheck
 * @description
 * @param {str} :{ string }
 * @return:tur false
 */
export function handleIsCheck(str, type) {
  const regCheck = {
    //
    text() {
      const regText = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4E00-\u9FA5]+$/g;
      const boo = regText.test(str);
      return boo;
    },
    //
    emailPhone() {
      const regText =
        /(^(((13[0-9])|(15[0-9])|(18[0-9]))\d{8})$)|(^[A-Za-z\d]+@([A-Za-z\d]+\.)(com|sina\.com|com\.cn|qq\.com|cn|net|net\.cn)$)/g;
      const boo = regText.test(str);
      return boo;
    },
    //
    textEmailPhone() {
      const regText =
        /(^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4E00-\u9FA5]+$)|(^(((13[0-9])|(15[0-9])|(18[0-9]))\d{8})$)|(^[A-Za-z\d]+@([A-Za-z\d]+\.)(com|sina\.com|com\.cn|qq\.com|cn|net|net\.cn)$)/g;
      const boo = regText.test(str);
      return boo;
    },
    //
    phone() {
      const regText = /^(((1(3|4|5|6|7|8|9)))\d{9})$/g;
      const boo = regText.test(str);
      return boo;
    },
    phone1() {
      const regText = /^(((13[0-9])|(15[0-9])|(18[0-9]))\d{8})$/g;
      const boo = regText.test(str);
      return boo;
    },
    //
    email() {
      const regText =
        /^[A-Za-z\d]+@([A-Za-z\d]+\.)(com|sina\.com|com\.cn|qq\.com|cn|net|net\.cn)$/g;
      const boo = regText.test(str);
      return boo;
    },
    //
    password() {
      const regText =
        /^(?![\d]+$)(?![a-zA-Z]+$)(?![!@#$%^&*]+$)[\da-zA-Z!@#$%^&*]{6,25}$/g;
      const boo = regText.test(str);
      return boo;
    },
    //
    num() {
      const regText = /^[0-9]{6}$/g;
      const boo = regText.test(str);
      return boo;
    }
  };
  const booResult = regCheck[type]();
  return booResult || '';
}
export function validatePassword(str) {
  const reg =
    /^(?![\d]+$)(?![a-zA-Z]+$)(?![!@#$%^&*]+$)[\da-zA-Z!@#$%^&*]{6,16}$/;
  return reg.test(str);
}
function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)')); // ( \\s|^ )  （\\s | $
}
/**
 * @name: handleAddClass
 * @description:
 * @param { elements }: { dom } { cName }: { name }
 * @return:
 */
export function handleAddClass(elements, cName) {
  if (!hasClass(elements, cName)) {
    elements.className += ' ' + cName;
  }
}
/**
 * @description
 * @param {type}
 * @return:
 */
export function handlePrevent(event) {
  //  console.log(event);
  if (event.preventDefault) {
    event.preventDefault(); // (W3C)
  } else {
    window.event.returnValue = false; // I
  }
  return false;
}

/**
 * @name: handleRander
 * @description
 * @param {arr} :{ Aarry }
 * @return:{arr} :{ Aarry }
 */
export function handleRander(arr) {
  for (let i = 0; i < arr.length; i++) {
    const iRend = parseInt(arr.length * Math.random());
    const temp = arr[i];
    arr[i] = arr[iRend];
    arr[iRend] = temp;
  }
  return arr;
}
/**
 * @name: handleHundred
 * @description:
 * @param
 * @return:{arr} :{ Aarry }
 */
export function handleHundred() {
  const numbersArray = [];
  const max = 100;
  for (let i = 1; numbersArray.push(i++) < max; );
  // console.log(numbersArray);
  return numbersArray;
}
/**
 * @name: handleGetCaption
 * @description
 * @param {str} :{ string }
 * @param {strPart} :{ string }
 * @return:{cutStr}:{string}
 */
export function handleGetCaption(str, strPart) {
  const index = str.lastIndexOf(strPart);
  // console.log(index);
  const cutStr = str.substring(index + strPart.length, str.length);
  return cutStr;
}
