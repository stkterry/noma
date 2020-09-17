import React from 'react';

export default function User({ user, businessName }) {

  return (
    <div id="navbar-user">
      <div className='navbar-userIcon'>

      </div>
      <div className="navbar-userinfo">
          <h5>{user}</h5>
          <h5>{businessName || "..."}</h5>
      </div>
    </div>
  )
}