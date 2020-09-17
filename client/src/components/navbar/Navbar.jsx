import React from 'react';
import { withRouter} from 'react-router-dom';

import UserContainer from './UserContainer';
import Selector from './Selector';
import Search from './Search';

export default withRouter(function Landing({active, setActive, links}) {

  return (
    <div id="navbar">
      <h2 className="logoHead">NOMADORY</h2>
      <ul className="navbar-links">
        {links.map(link => 
          <li key={link}>
            <Selector
              active={active===link}
              onClick={() => setActive(link)}
              >
                {link}
            </Selector>
          </li>
        )}
        <li key="Search">
          <Search />
        </li>
        <li key="User">
          <UserContainer />
        </li>
      </ul>
    </div>
  )

})