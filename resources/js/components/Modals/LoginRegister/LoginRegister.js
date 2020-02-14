import React, { useState } from 'react';
import { connect } from 'react-redux';

import { submitRegistrationForm } from '../../../actions/user';

import Form from '../../Forms/Form';

import { ModalContainer } from './styles';

const LoginRegister = () => {
  const [currentTab, setCurrentTab] = useState('login');

  const submitRegistrationForm = values => {
    // This is broken...  WHY?!
    submitRegistrationForm(values);
  }

  const submitLoginForm = values => {
    console.log(values);
  }

  return (
    <ModalContainer>
      <div className="form-container">
        <Form slug={currentTab} onSubmit={currentTab === 'registration' ? submitRegistrationForm : submitLoginForm} />
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

export default connect(null, {
  submitRegistrationForm,
})(LoginRegister);