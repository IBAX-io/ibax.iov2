export default ({ app: { router }, store }) => {
  if (process.client && process.env.NODE_ENV === 'production') {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-inner-declarations
    function gtag() {
      // eslint-disable-next-line no-undef
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-3P74G75LD1', {
      page_title: document.title,
      page_location: location.href
    });
    router.afterEach((to, from) => {
      gtag('set', 'page', to.fullPath);
      gtag('send', 'pageview');
    });
  }
};
