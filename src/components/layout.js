import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import '../assets/scss/index.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
       query LayoutQuery {
          site {
            siteMetadata {
              title
              menu {
                key
                title
                url
              }
            }
          }
       }
    `}
    render={({ site }) => (
      <Fragment>
        <Helmet
          defaultTitle={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Restorer Motors' },
            { name: 'keywords', content: 'restorer, motors, garage, plumstead, woolwich, london, repair, fix' },
          ]}
        />
        <Header
          siteTitle={site.siteMetadata.title}
          siteMenu={site.siteMetadata.menu}
        />
        {children}
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
