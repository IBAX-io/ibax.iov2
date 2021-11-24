import { handleGetLang } from '../assets/js/public.js';
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  const defaultLocale = app.i18n.fallbackLocale;
  if (isHMR) return;
  const lang = handleGetLang();
  store.commit('handleChangeLang', lang);
  app.i18n.locale = lang;
  if (
    lang === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '');
    const zh = new RegExp(toReplace);
    return redirect(route.fullPath.replace(zh, '/'));
  }
}
