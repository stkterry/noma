import React from 'react';

export default function Selector({active, children, ...rest}) {

  const defClasses = 'selector noselect';

  return (
    <div 
      className={active ? `selector-active ${defClasses}` : `selector-inactive ${defClasses}` } 
      {...rest}
      >
      <h4>
        {children}
      </h4>
    </div>
  )
}