import React, { Component } from 'react';
import '../css/PopMedia.css';

class PopMedia extends Component {
  toggleMedia = () => {
    this.refs.media.classList.toggle('active');
  }

  render() {
    return (
      <div ref="media" className={'popMedia col s12' + (this.props.right ? ' right' : '')}>
        <div onClick={this.toggleMedia}>
          <img src={require('./assets/' + this.props.media.toLowerCase() + '.svg')} alt="media"/>
        </div>
        <div>
          <span className="title">{this.props.media}</span>
          <span className={(this.props.media.toLowerCase() === 'email' ? 'smaller' : '')}>{this.props.link}</span>
        </div>
      </div>
    );
  }
}

export default PopMedia;