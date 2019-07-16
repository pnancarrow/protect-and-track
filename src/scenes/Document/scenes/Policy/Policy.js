import React from 'react';

import Access from './components/Access/Access';
import Expiration from './components/Expiration/Expiration';
import Watermarking from './components/Watermarking/Watermarking';
import Forwarding from './components/Forwarding/Forwarding';
import Button from 'components/Button/Button';
import './Policy.css';

export const ENCRYPT_STATES = {
  AUTHENTICATING: 0,
  UNPROTECTED: 1,
  PROTECTING: 2,
  PROTECTED: 3,
};

function PolicyPanel({ file, userId, login, encrypt, encryptState }) {
  const renderButtons = () => {
    switch (encryptState) {
      case ENCRYPT_STATES.AUTHENTICATING:
        return <Button disabled>Authenticating...</Button>;
      case ENCRYPT_STATES.PROTECTING:
        return <Button disabled>Protecting...</Button>;
      case ENCRYPT_STATES.PROTECTED:
        return null;
      default:
        if (userId) {
          return <Button onClick={encrypt}>Protect File</Button>;
        }

        return (
          <>
            <Button onClick={login}>Sign in to continue</Button>
            <Button disabled>Protect File</Button>
          </>
        );
    }
  };
  return (
    <div className="PolicyPanel" id="policypanel">
      <Access />
      <hr className="PolicyPanel-rule" />
      <Expiration />
      <hr className="PolicyPanel-rule" />
      <Forwarding />
      <Watermarking />
      <span className="PolicyPanel-buttons">{renderButtons()}</span>
    </div>
  );
}

export default PolicyPanel;