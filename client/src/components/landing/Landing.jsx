import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';


import Spacer from '../util/Spacer';
import Navbar from '../navbar/Navbar';
import Dashboard from './dashboard/Dashboard';

const navLinks = [
  'Dashboard',
  'Requests',
  'Documents Library',
  'Settings',
  'Profile'
]

export default withRouter(function Landing({ getProfile, userId, profile, logout }) {

  const [active, setActive] = useState(navLinks[0]);

  useEffect(() => {
    getProfile(userId)
  }, [getProfile, userId]);

  return (
    <div id="landing-container">
      <Navbar active={active} setActive={setActive} links={navLinks} />
      <Spacer height={'100px'} />
      {active === "Dashboard" && <Dashboard profile={profile} />}
      {active === "Requests" && <h2>Requests</h2>}
      {active === "Documents Library" && <h2>Documents Library</h2>}
      {active === "Settings" && <h2>Settings</h2>}
      {active === "Profile" && <div><h2>Profile</h2><button onClick={logout}>Logout</button></div>}
    </div>
  )

})