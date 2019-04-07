import React from 'react'

import fullServiceImage from '../assets/images/full-service.jpg'
import recoveryVanImage from '../assets/images/recovery-van.png'
import picknfixImage from '../assets/images/picknfix.jpg';
import brandNewTyresImage from '../assets/images/brand-new-tyres.jpg'

const SectionFeatured = () => (
  <section className='page-section'>
    <div className='container'>
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">MOT - <span className="text-muted">Servicing</span> - Repairs <span className="text-muted">Diagnostics</span></h2>
          <p className="lead">We provide full car service from £99. We also guarantee 100% satisfaction.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" alt="Full Vehicle Service" src={fullServiceImage}/>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Break Down <span className="text-muted">Recovery</span></h2>
          <p className="lead">If you are car is stuck somewhere we can recover and repair it and can devliver it to you. </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto" alt="Break down recovery service" 
            src={recoveryVanImage} />
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Pick &amp; <span className="text-muted">Fix</span></h2>
          <p className="lead">
            If you are not able to drop your car for repairing then 
            can come to pick up your car, repair it and drop it again. 
            We call it Pick &amp; Fix service. 
          </p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto"
            src={picknfixImage} alt='Fix it quick' />
        </div>
      </div>

      <hr className="featurette-divider" />      


      <div className='row featurette'>
        <div className='col-md-7 order-md-2'>
          <h2 className='featurette-heading'>Brand new Tyres</h2>
          <p className='lead'>
            Get your tyres checked and replaced if required. We only replace 
            old tyre with brand new tyres. 
          </p>
        </div>
        <div className='col-md-5 order-md-1'>
          <img className='featurette-image img-fluid mx-auto' src={brandNewTyresImage} alt='New Typres' />
        </div>
      </div>
    </div>
  </section>
)

export default SectionFeatured;
