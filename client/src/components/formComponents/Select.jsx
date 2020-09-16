import React from 'react';

export default function Select({ register, options, name, placeholder, ...rest }) {

  let defOpt, defaultValue;
  if (placeholder) {
    defaultValue = placeholder;
    defOpt = <option value="none" hidden disabled>{defaultValue}</option>
  }

  return (
    <select
      name={name}
      ref={register}
      defaultValue={defaultValue}
      {...rest}
    >
      {options.map(value => <option key={value} value={value}>{value}</option>)}
      {defOpt}
    </select>
  )
};