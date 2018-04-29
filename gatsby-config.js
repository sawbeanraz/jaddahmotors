module.exports = {
  siteMetadata: {
    title: 'Jaddah Motors',
    menu: [
      { key: 'home',      title: 'Home',      url: '/' },
      { key: 'services',  title: 'Services',  url: '/services' },
      { key: 'product',   title: 'Products',  url: '/products' },
      { key: 'about',     title: 'About',     url: '/about' },
      { key: 'contact',   title: 'Contact',   url: '/contact' }   
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass', 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
  pathPrefix: '/jaddahmotors'
}
