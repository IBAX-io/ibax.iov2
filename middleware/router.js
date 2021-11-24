export default ({ app, store }) => {
  app.router.afterEach((to, from, next) => {
    if (process.client) {
      //  window.location.reload();
      const global = document.getElementById('global');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      if (global) {
        global.firstChild.scrollTop = 0;
      }
    }
  });
};
