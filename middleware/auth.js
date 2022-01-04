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
  const arrIntercept = [
    'login',
    'user',
    'login-callback',
    'user-github',
    'user-points',
    'user-receive',
    'user-retweet',
    'user-rules',
    'user-share'
  ];
  const arrFromName = [
    'user',
    'user-github',
    'user-points',
    'user-receive',
    'user-retweet',
    'user-rules',
    'user-share'
  ];
  const arrLogin = ['login'];
  //  current leave route
  const fromName = app.router.currentRoute.name;
  // console.log(fromName);
  const strToName = route.name;
  if (arrIntercept.includes(strToName)) {
    if (token && arrLogin.includes(fromName)) {
      redirect('/user');
    }
    /* if (token && fromRouter.name === 'login-callback') {
      redirect('/');
    } */
    if (!token && arrFromName.includes(fromName)) {
      redirect('/login');
    }
  }
}
