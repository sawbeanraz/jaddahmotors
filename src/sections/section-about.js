import React from 'react';

const SectionAbout = () => (
  <section className="page-section home-welcome-message">
    <article className="container">
      <header className="row">
        <div className="col-sm-12">
          <h1 className="page-section-heading">Restorer Motors</h1>
        </div>
      </header>
      <div className="row">
        <div className="col-sm-12">
          <p className="lead">
            {`We are small workshop that provide best care, repair and 
            maintenance service. We are well equipped to provide better 
            service in resonable price. We have capability of full dealer.
            `}
          </p>
          <p className="lead">
            {`A part from being new local garage, we have experice of more than 
            20 years providing service. Our aim is to provide quality service
            so that you enjoy your motoring experice.`}
          </p>
        </div>
      </div>
    </article>
  </section>
);

export default SectionAbout;
