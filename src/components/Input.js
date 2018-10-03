import React from 'react';

function Input(props) {
  let input;
  if (props.type === 'text' || !props.type)
    input = <input type="text" id={props.id}/>;
  else if (props.type !== 'textarea')
    input = <input type={props.type} id={props.id}/>
  else
    input = <textarea id={props.id} className="materialize-textarea" />

  return (
    <div className={'input-field' + (props.className ? ' ' + props.className : '')}>
      {input}
      <label for={props.id}>{props.label}</label>
    </div>
  );
}

export default Input;