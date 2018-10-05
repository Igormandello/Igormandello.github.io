import React, { Component } from 'react';
import '../css/Monitor.css';

class Monitor extends Component {
  constructor(props) {
    super(props);
    
    this.images = [];
    for (let i = 0; i < this.props.images.length; i++)
      this.images.push(<img src={require('./assets/' + this.props.images[i])} alt=""/>);

    this.state = {
      active: 0
    };
  }

  setActive = (i) => {
    for (let n = 0; n < this.refs.display.children.length; n++)
      this.refs.display.children[n].style.transform = 'translateX(-' + 100 * i + '%)';
  }

  render() {
    return (
      <div className="monitor col m6 s12">
        <div>
          <div ref="display">
            {this.images}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Monitor;