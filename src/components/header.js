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
        <div className='container'>
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
        </div>
      </nav>
    )
  } 
}
