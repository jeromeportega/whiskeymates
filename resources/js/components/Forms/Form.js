import React from 'react';
import { Form as FormContainer } from 'react-final-form';
import Registration, { submit as registrationSubmit } from './Registration/Registration';

console.log(Registration);

const forms = {
  'registration': {
    component: Registration,
    onSubmit: registrationSubmit,
  },
}

const Form = ({ slug }) => {
  const SelectedForm = forms[slug];

  return (
    <FormContainer onSubmit={SelectedForm.onSubmit} render={SelectedForm.component} /> 
  );
}

export default Form;