import React from 'react';
import { Form as FormContainer } from 'react-final-form';
import Registration from './Registration/Registration';
import Login from './Login/Login';

const forms = {
  'registration': Registration,
  'login': Login,
}

const Form = ({ slug, onSubmit }) => {
  const Component = forms[slug];

  return (
    <FormContainer onSubmit={onSubmit} render={Component} />
  );
}

export default Form;