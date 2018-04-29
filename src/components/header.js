import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/motors-logo.svg';

export default class Header extends React.Component {

  constructor(context, props) {
    super(context, props)
    this.state = {
      open: false
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu(e) {        
    this.setState((prev, props) => ({
      open: !prev.open
    }));
  }

  
  render(){
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">      
        <Link to="/" className="navbar">
          {logo?<img src={logo} alt="logo"/>:this.props.siteTitle}
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
          onClick={this.handleToggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.open?"navbar-collapse collapse show":"navbar-collapse collapse"} id="navbarCollapse">
          <ul className="navbar-nav ml-auto">            
            {this.props.siteMenu.map((item) => (          
                <li key={item.key} className="nav-item">
                  <Link key={item.key} to={item.url}  className='nav-link'>
                  {item.title}
                  </Link>
                </li>
            ))}
          </ul>          
        </div>
      </nav>
    )
  } 
}





/**

  <div className="navbar-wrapper" data-spy="affix" data-offset-top="127">
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <nav className="navbar">              
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src='images/motors-logo.svg' className='svg brand-logo' alt='Motors Logo'/>
            </a>                              
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
            <ul className="nav navbar-nav navbar-right">                
              <li className="active"><a href="#">Home</a></li>
              <li className=""><a href="#">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>              
        </nav>
      </div>
    </div>

  </div>
</div>
 */


/**
 * <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
 */