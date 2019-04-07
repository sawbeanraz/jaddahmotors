import React from 'react';
import Layout from '../components/layout';
import PageCarousel from '../sections/page-carousel';
import SectionAbout from '../sections/section-about';
import SectionMarketing from '../sections/section-marketing';
import SectionFeatured from '../sections/section-featured';

const IndexPage = () => (
  <Layout>
    <main role="main" className="main-container">
      <PageCarousel />
      <SectionAbout />
      <SectionMarketing />
      <SectionFeatured />
    </main>
  </Layout>
);

export default IndexPage;
