import React from 'react';

function AboutMeSection(props) {
  return (
    <div>
      <div>
        {props.children}
      </div>
      <div>
        <img src={require('./../imgs/' + props.image)} alt=""/>
      </div>
    </div>
  );
}

export default AboutMeSection;