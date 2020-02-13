import React from 'react';
import { Form as FormContainer } from 'react-final-form';
import Registration, { submit as registrationSubmit } from './Registration/Registration';
import Login, { submit as loginSubmit } from './Login/Login';

const forms = {
  'registration': {
    Component: Registration,
    onSubmit: registrationSubmit,
  },
  'login': {
    Component: Login,
    onSubmit: loginSubmit,
  }
}

const Form = ({ slug }) => {
  const selectedForm = forms[slug];

  return (
    <FormContainer onSubmit={selectedForm.onSubmit} render={selectedForm.Component} /> 
  );
}

export default Form;