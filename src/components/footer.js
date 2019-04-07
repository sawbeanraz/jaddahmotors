import React from 'react';

import logo from '../assets/images/motors-logo.svg';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <address>
            <img src={logo} alt="Company Logo" />
            <h4>Restorer Motors</h4>
            12 Conway Road, Plumstead,
            <br />
            London,
            <br />
            SE18 1AQ
            <br />
            <i className="fa fa-phone" />
            <a href="tel:+442083174430">020 8317 4430</a>
          </address>
        </div>

        <div className="col-md-4">
          <h4 className="footer-heading">Opening Times</h4>
          <ul className="opening-time">
            <li>
              <strong>Mon:</strong>
              {' 8:30am - 6:30pm'}
            </li>
            <li>
              <strong>Tue:</strong>
              {' 8:30am - 6:30pm'}
            </li>
            <li>
              <strong>Wed:</strong>
              {' 8:30am - 6:30pm'}
            </li>
            <li>
              <strong>Thu:</strong>
              {' 8:30am - 6:30pm'}
            </li>
            <li>
              <strong>Fri:</strong>
              {' 8:30am - 6:30pm'}
            </li>
            <li>
              <strong>Sat:</strong>
              {' 8:30am - 6:30pm'}
            </li>
            <li>
              <strong>Sun:</strong>
              {' Closed'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
