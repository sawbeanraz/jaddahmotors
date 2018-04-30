import React from 'react'


const Copyright = () => (
  <div className="copyright-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="pull-right">
            <a href="#" className="back-to-top">
              <i className="fa fa-arrow-up"></i>
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Jaddah Motors               
          </p>
        </div>
      </div>
    </div>
  </div>
)


export default Copyright;