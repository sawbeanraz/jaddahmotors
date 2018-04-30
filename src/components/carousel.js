import React, { Component } from 'react'
import Link from 'gatsby-link'


export default class Carousel extends Component {

  constructor(context, props) {
    super(context, props);

    this.state = {
      index: 0,
      timer: 1000
    }

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    
    this.handleTimer = this.handleTimer.bind(this);
  }


  handleTimer() {
    this.timer = setInterval(() => {			
      this.setState((prevState, props) => ({
        index: prevState.index >= props.items.length -1 ?0:prevState.index + 1
      }));
		}, 4000);
  }

  componentDidMount() {
    this.handleTimer();
  }


  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }


  handleNext(e) {
    this.setState((prev, props) => ({      
      index: (prev.index >= props.items.length - 1) ? 0:prev.index + 1
    }));    
  }

  handlePrevious(e) {
    this.setState((prev, props) => ({      
      index: (this.state.index <= 0)?props.items.length - 1:prev.index - 1
    }));    
  }

  
  render() {
    return (
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {this.props.items.map((item, index) => (
            <li key={item.key} className={this.state.index == index?'active': ''}></li>
          ))}          
        </ol>
        <div className="carousel-inner">
          {this.props.items.map((item, index) => (
            <div className={this.state.index == index?'carousel-item active':'carousel-item'}
              key={item.key}
              style={{backgroundImage: `url(${item.image})`}}>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                  {item.url?
                  <p><Link className="btn btn-lg btn-primary" to={item.url} 
                  role="button">Learn more</Link></p>
                  :undefined}
                </div>
              </div>
            </div>
          ))}          
        </div>
        <a className="carousel-control-prev" role="button" data-slide="prev"
          onClick={this.handlePrevious}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" data-slide="next"
          onClick={this.handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }

}