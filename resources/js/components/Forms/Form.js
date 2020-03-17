import React from 'react';
import { Form as FormContainer } from 'react-final-form';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import AddWhiskey from './AddWhiskey/AddWhiskey';

const forms = {
  'registration': Registration,
  'login': Login,
  'add-whiskey': AddWhiskey,
}

const Form = ({ slug, onSubmit, isSubmitting = false }) => {
  const Component = forms[slug];

  return (
    <FormContainer onSubmit={onSubmit} render={Component} isSubmitting={isSubmitting} />
  );
}

export default Form;