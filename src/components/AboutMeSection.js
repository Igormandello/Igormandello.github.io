import React from 'react';
import '../css/AboutMeSection.css';

function AboutMeSection(props) {
  return (
    <div className={'aboutMeSection row' + (props.reverse ? ' reverse' : '')}>
      <div className="col l6 s12">
        {props.children}
      </div>
      <div className="col l6 s12">
        <img src={require('./../imgs/' + props.image)} alt=""/>
      </div>
    </div>
  );
}

export default AboutMeSection;