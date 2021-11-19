/*
 * @Author: abc
 * @Date: 2021-11-11 15:42:02
 * @LastEditors: abc
 * @LastEditTime: 2021-11-19 11:42:10
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
  const token = store.state.token;
  const arrIntercept = ['login', 'personal'];
  //  current leave route
  const fromRouter = app.router.currentRoute;
  console.log(fromRouter.name);
  const strToName = route.name;
  if (arrIntercept.includes(strToName)) {
    if (token && fromRouter.name === 'login') {
      redirect('/personal');
    }
    if (!token && fromRouter.name === 'personal') {
      redirect('/login');
    }
  }
}
