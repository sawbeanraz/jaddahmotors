import React from 'react'

import mot from '../assets/images/mot-logo.png'
import fixit from '../assets/images/fix_it.jpg'
import intirim from '../assets/images/intirim-service.jpg'


const SectionMarketing = () => (
  <section className='page-section shaded-orange'>
    <div className="container marketing">


      <div className="row">
        <div className="col-lg-4">
          <img className="rounded-circle" src={fixit} alt="Full service logo" width="140" height="140" />
          <h2>Full service from £99</h2>          
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src={intirim} alt="Intrim Service Logo" width="140" height="140" />
          <h2>Intrim Service from £77</h2>          
          
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src={mot} alt="MOT Logo" width="140" height="140" />
          <h2>MOT only £40</h2>          
        </div>
      </div>
    </div>
  </section>
)
          
export default SectionMarketing;