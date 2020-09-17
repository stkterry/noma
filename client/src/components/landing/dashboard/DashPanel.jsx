import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import BtnDash from '../../buttons/BtnDash';

export default withRouter(function DashPanel ({header, text, isComplete, push, history, ...rest}) {
  return (
    <div className="dashboard-panel">
      <div>
        <h3>{header}</h3>
        <h5>{text}</h5>
        {
          !isComplete && (
            <BtnDash
              onClick={() => history.push(push)}
            >Begin
            </BtnDash>
          )
        }
      </div>
      {
        isComplete && (
          <FontAwesomeIcon className="dashboard-check" icon={faCheck} />
        )
      }
    </div>
  )
})