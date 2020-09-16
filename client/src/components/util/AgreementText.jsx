import React from 'react';
import { Link } from 'react-router-dom';

export default function AgreementText (props) {
  return (
    <p>
      You have read and agree to the <Link className="inline-link" to="/userAgreement">User Agreement, Privacy Statement.</Link> if You provide your mobile number, you confirm that you are authorized to add this number and give us permission to contact you about your Nomadory accounts using automated calls or texts to service your accounts, but not for telemarketing.  If you don't want to receive automated calls or texts, you can change your preferences in your account settings at any time.
    </p>
  )
}