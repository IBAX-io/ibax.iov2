export default ({ app, store, route }) => {
  app.router.afterEach((to, from, next) => {
    if (process.client) {
      //  window.location.reload();
      const global = document.getElementById('global');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      if (global) {
        global.firstChild.scrollTop = 0;
      }
      // console.log(route.currentRoute);
      //  console.log(route.name);
      /* if (route.name === 'user') {
        window.location.reload();
      } */
    }
  });
};
