module.exports = {
  siteMetadata: {
    title: 'Jaddah Motors',
    menu: [
      { key: 'home',      title: 'Home',      url: '/' },
      { key: 'services',  title: 'Services',  url: '/services' },      
      { key: 'about',     title: 'About',     url: '/about' },
      { key: 'contact',   title: 'Contact',   url: '/contact' }   
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',    
    'gatsby-plugin-sass'    
  ],
  pathPrefix: '/jaddahmotors'
}
