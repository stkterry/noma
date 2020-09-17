import React from 'react';

export default function Spacer({height, width, ...rest}) {
  return (
    <div style={{width: width || '100%', height: height || '100px', ...rest }} />
  )
};
