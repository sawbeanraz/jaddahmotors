import React from 'react'
import Link from 'gatsby-link'

import PageCarousel from '../sections/page-carousel'
import SectionAbout from '../sections/section-about'
import SectionMarketing from '../sections/section-marketing'
import SectionFeatured from '../sections/section-featured'

const IndexPage = () => (
  <main role="main" className="main-container">
    
    <PageCarousel />

    <SectionAbout />

    <SectionMarketing />

    <SectionFeatured />



  </main>
)

export default IndexPage
