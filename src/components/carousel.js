import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const CAROUSEL_TIMER_INTERVAL = 5000;

export default class Carousel extends Component {
  constructor(context, props) {
    super(context, props);

    this.state = {
      index: 0,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
  }

  componentDidMount() {
    // this.handleTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleNext(e) {
    e.preventDefault();
    this.setState((prev, props) => ({
      index: (prev.index >= props.items.length - 1) ? 0 : prev.index + 1,
    }));
  }

  handlePrevious(e) {
    e.preventDefault();
    const { index } = this.state;
    const { items } = this.props;

    const newIndex = index <= 0 ? items.length - 1 : index - 1;

    this.setState({
      index: newIndex,
    });
  }

  handleTimer() {
    this.timer = setInterval(() => {
      this.setState((prevState, props) => ({
        index: prevState.index >= props.items.length - 1 ? 0 : prevState.index + 1,
      }));
    }, CAROUSEL_TIMER_INTERVAL);
  }

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {items.map((item, index_) => (
            <li key={item.key} className={index === index_ ? 'active' : ''} />
          ))}
        </ol>
        <div className="carousel-inner">
          {items.map((item, index_) => (
            <div
              className={index === index_ ? 'carousel-item active' : 'carousel-item'}
              key={item.key}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                  {item.url
                    ? (
                      <p>
                        <Link
                          className="btn btn-lg btn-primary"
                          to={item.url}
                          role="button"
                        >
                          Learn more
                        </Link>
                      </p>
                    )
                    : undefined}
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
          onClick={this.handlePrevious}
          href="#previous"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          role="button"
          data-slide="next"
          onClick={this.handleNext}
          href="#next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.stirng,
    content: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};
