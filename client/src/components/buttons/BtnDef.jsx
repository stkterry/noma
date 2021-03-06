import React from 'react';

export default function BtnDef ({onClick, children, ...rest}) {

  return (
    <button 
      className="btn-def" 
      onClick={onClick}
      {...rest}
      >
        {children}
    </button>
  )
}