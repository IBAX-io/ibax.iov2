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
  const arrIntercept = ['login', 'user', 'login-callback'];
  //  current leave route
  const fromRouter = app.router.currentRoute;
  console.log(fromRouter.name);
  const strToName = route.name;
  if (arrIntercept.includes(strToName)) {
    if (token && fromRouter.name === 'login') {
      redirect('/user');
    }
    /* if (token && fromRouter.name === 'login-callback') {
      redirect('/');
    } */
    if (!token && fromRouter.name === 'user') {
      redirect('/login');
    }
  }
}
