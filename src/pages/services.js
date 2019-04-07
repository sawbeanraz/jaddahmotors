import React from 'react';

import Layout from '../components/layout';

const ServicesPage = () => (
  <Layout>
    <main role="main" className="main-container">
      <div
        className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        style={{ maxWidth: '700px' }}
      >
        <h1 className="display-4">Services</h1>
        <p className="lead">
          We provide all the necessary services for your vehicles.
          Main services that we provide are as follows:
        </p>
      </div>
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">MOT</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <small className="text-muted" />
                £40
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>All kind of vehicle</li>
                <li>We make sure you vehicle pass MOT</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Full Service</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <small className="text-muted">from </small>
                £99
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Full servicing of your car</li>
                <li>Labour cost included</li>
                <li>Additional cost for only changed parts</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Intrim Service</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <small className="text-muted">from </small>
                £70
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Intrim Service for your vehicle</li>
                <li>Quick</li>
                <li>Reliable</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">
                Repairing
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li>All kinds of repairing</li>
                <li>Body repairing</li>
                <li>Engine repairing</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Tyres</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li>Tyre inspection</li>
                <li>Brand new tyres</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Recovery Service</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li>Pick and Fix Service</li>
                <li>Break down recovery</li>
              </ul>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Car Accessories</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li>Li-on Battery</li>
                <li>Engine Oil</li>
                <li>Engine Filters</li>
                <li>Polishing Wax</li>
                <li>Car bulbs and lights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default ServicesPage;
