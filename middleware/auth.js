/*
 * @Author: abc
 * @Date: 2021-11-11 15:42:02
 * @LastEditors: abc
 * @LastEditTime: 2021-11-16 14:33:22
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
  const arrIntercept = ['login', 'personal', 'login-callback'];
  //  current leave route
  const fromRouter = app.router.currentRoute;
  console.log(fromRouter.name);
  const strToName = route.name;
  const token = store.state.token;
  console.log(token);
  if (arrIntercept.includes(strToName)) {
    if (token && fromRouter.name === 'login') {
      redirect('/personal');
    }
    if (!token && fromRouter.name === 'personal') {
      redirect('/login');
    }
    if (!token && fromRouter.name === 'login-callback') {
      redirect('/login');
    }
  }
}
