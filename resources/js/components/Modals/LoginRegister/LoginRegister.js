import React, { useState } from 'react';

import Form from '../../Forms/Form';

import { ModalContainer } from './styles';

const LoginRegister = ({ tab }) => {
  const [currentTab, setCurrentTab] = useState('login');

  return (
    <ModalContainer>
      <div className="form-container">
        <Form slug={currentTab} />
      </div>
      {
        currentTab === 'login' ?
          <a href="#" onClick={() => setCurrentTab('registration')}>Not a member yet? Register now!</a>
        :
          <a href="#" onClick={() => setCurrentTab('login')}>Already a member? Log in!</a>
      }
    </ModalContainer>
  );
}

export default LoginRegister;