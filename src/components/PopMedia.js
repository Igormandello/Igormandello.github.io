import React, { Component } from 'react';
import '../css/PopMedia.css';

class PopMedia extends Component {
  openMedia(event) {
    let target = event.target
    if (event.target.tagName === 'IMG')
      target = target.parentNode;

    target.parentNode.classList.toggle('active');
  }

  render() {
    return (
      <div className={'popMedia col s12' + (this.props.right ? ' right' : '')}>
        <div onClick={this.openMedia}>
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