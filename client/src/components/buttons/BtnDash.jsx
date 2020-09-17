import React from 'react';

export default function BtnDash ({onClick, children, ...rest}) {

  return (
    <button 
      className="btn-dash" 
      onClick={onClick}
      {...rest}
      >
        {children}
    </button>
  )
}