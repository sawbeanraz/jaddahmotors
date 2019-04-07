module.exports = {
  siteMetadata: {
    title: 'Restorer Motors',
    menu: [
      {
        key: 'home',
        title: 'Home',
        url: '/',
      },
      {
        key: 'services',
        title: 'Services',
        url: '/services',
      },
      {
        key: 'about',
        title: 'About',
        url: '/about',
      },
      {
        key: 'contact',
        title: 'Contact',
        url: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
  pathPrefix: '/restorermotors.co.uk',
};
