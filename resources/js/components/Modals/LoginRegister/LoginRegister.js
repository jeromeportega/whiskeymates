import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { submitRegistrationForm, submitLoginForm } from '../../../actions/user';

import Form from '../../Forms/Form';

import { ModalContentsContainer } from './styles';

const LoginRegister = ({
  submitRegistrationForm,
  submitLoginForm,
  show,
  onHide,
  closeModal,
}) => {
  const [currentTab, setCurrentTab] = useState('login');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitFormHandler = values => {
    setIsSubmitting(true);

    if (currentTab === 'registration') {
      submitRegistrationForm({
        values,
        setIsSubmitting,
        closeModal,
      });
    } else {
      submitLoginForm({
        values,
        setIsSubmitting,
        closeModal,
      });
    }
  }

  return (
    <Modal show={show} onHide={onHide}>
      <ModalContentsContainer>
        <div className="form-container">
          <Form slug={currentTab} onSubmit={submitFormHandler} isSubmitting={isSubmitting} />
        </div>
        {
          currentTab === 'login' ?
            <a href="#" onClick={() => setCurrentTab('registration')}>Not a member yet? Register now!</a>
          :
            <a href="#" onClick={() => setCurrentTab('login')}>Already a member? Log in!</a>
        }
      </ModalContentsContainer>
    </Modal>
  );
}

export default connect(null, {
  submitRegistrationForm,
  submitLoginForm,
})(LoginRegister);