import React, { Component } from 'react';
import '../css/AboutMeSection.css';

class AboutMeSection extends Component {
  componentDidMount() {
    document.addEventListener('scroll', this.parallax);
    this.x = 0;
  }

  parallax = (a, b) => {
    console.log(a, b);
    
    this.x += .05;
    if (this.x > 25)
      this.x = 25;

    this.refs.image.style.transform = 'translateX(calc(' + (this.props.reverse ? '-25% + ' : '') + (this.x * (this.props.reverse ? 1 : -1)) + '%))';
  }

  render() {
    return (
      <div className={'aboutMeSection row' + (this.props.reverse ? ' reverse' : '')}>
        <div className="col l6 s12">
          {this.props.children}
        </div>
        <div className="col l6 s12">
          <div className="parallax-wrapper">
            <img ref="image" src={require('./../imgs/' + this.props.image)} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeSection;