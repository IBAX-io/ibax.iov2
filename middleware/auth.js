/*
 * @Author: abc
 * @Date: 2021-11-11 15:42:02
 * @LastEditors: abc
 * @LastEditTime: 2021-11-13 16:44:51
 * @Description:
 */
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  const arrIntercept = [
    'login',
    'login-personal',
    'login-callback',
    'login-rules'
  ];
  //  current leave route
  const fromRouter = app.router.currentRoute;
  console.log(fromRouter.name);
  const strToName = route.name;
  console.log(strToName);
  const token = store.state.token;
  console.log(token);
  if (arrIntercept.includes(strToName)) {
    redirect('/');
    /* if (token && fromRouter.name === 'login') {
      redirect('/login/personal');
    }
    if (!token && fromRouter.name === 'login-personal') {
      redirect('/login');
    } */
  }
}
