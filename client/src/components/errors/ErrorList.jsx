import React from 'react';

export default function ErrorList({ errors }) {
  return (
    errors ? <ul>
      {errors.map((error, idx) => <li key={idx}><h5>{error}</h5></li>)}
    </ul> : null
  )
}