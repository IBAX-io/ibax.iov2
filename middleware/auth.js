/*
 * @Author: abc
 * @Date: 2021-11-11 15:42:02
 * @LastEditors: abc
 * @LastEditTime: 2021-11-13 17:13:18
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
  const arrIntercept = ['login', 'login-personal'];
  //  current leave route
  const fromRouter = app.router.currentRoute;
  console.log(fromRouter.name);
  const strToName = route.name;
  const token = store.state.token;
  console.log(token);
  if (arrIntercept.includes(strToName)) {
    if (token && fromRouter.name === 'login') {
      redirect('/login/personal');
    }
    if (!token && fromRouter.name === 'login-personal') {
      redirect('/login');
    }
  }
}
