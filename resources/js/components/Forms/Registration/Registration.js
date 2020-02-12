import React from 'react';
import { Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';

const Registration = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <Field name="email" component="input" placeholder="someone@somewhere.com" />
      </div>
      <Button>Submit Form</Button>
    </Form>
  );
}

export const submit = (data) => {
  console.log(data);
}

export default Registration;