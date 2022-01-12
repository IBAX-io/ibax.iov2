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
    'user-airdrop-rules',
    'user-points',
    'user-link-github',
    'user-retweet',
    'user-rules',
    'user-share',
    'user-commits',
    'user-github-rules'
  ];
  const arrFromName = [
    'user',
    'user-airdrop-rules',
    'user-points',
    'user-link-github',
    'user-retweet',
    'user-rules',
    'user-share',
    'user-commits',
    'user-github-rules'
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
