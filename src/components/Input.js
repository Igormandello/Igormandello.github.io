import React from 'react';

function Input(props) {
  return (
    <div>
      <input type="text" id={props.id}/>
      <label for={props.id}></label>
    </div>
  );
}

export default Input;