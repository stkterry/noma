import React from 'react';

export default function BtnDef (props) {

  return (
    <button 
      className="btn-def" 
      onClick={props.onClick}
      >
        {props.children}
    </button>
  )
}