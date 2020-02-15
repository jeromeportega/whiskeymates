import React from 'react';
import { Form as FormContainer } from 'react-final-form';
import Registration from './Registration/Registration';
import Login from './Login/Login';

const forms = {
  'registration': Registration,
  'login': Login,
}

const registrationInitialValues = {
  name: 'Jerome Ortega',
  username: 'jportega87',
  email: 'jportega87@gmail.com',
  password: 'password',
}

const Form = ({ slug, onSubmit }) => {
  const Component = forms[slug];

  return (
    <FormContainer onSubmit={onSubmit} render={Component} initialValues={slug === 'registration' ? registrationInitialValues : {}} />
  );
}

export default Form;