import React, { useState } from 'react';
import { connect } from 'react-redux';

import { submitRegistrationForm, submitLoginForm } from '../../../actions/user';

import Form from '../../Forms/Form';

import { ModalContainer } from './styles';

const LoginRegister = ({ submitRegistrationForm, submitLoginForm }) => {
  const [currentTab, setCurrentTab] = useState('login');

  const submitRegistrationFormHandler = values => {
    submitRegistrationForm(values);
  }

  const submitLoginFormHandler = values => {
    submitLoginForm(values);
  }

  return (
    <ModalContainer>
      <div className="form-container">
        <Form slug={currentTab} onSubmit={currentTab === 'registration' ? submitRegistrationFormHandler : submitLoginFormHandler} />
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
  submitLoginForm,
})(LoginRegister);