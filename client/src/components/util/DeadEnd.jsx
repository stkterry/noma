import React from 'react';

export default function DeadEnd(props) {
  return (
    <div>
      <h1>You've reached a dead end!</h1>
      <h2>Click<button onClick={props.history.goBack}>here</button> to go back!</h2>
    </div>
  )
};