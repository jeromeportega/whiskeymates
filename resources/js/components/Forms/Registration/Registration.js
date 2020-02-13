import React from 'react';
import { Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';

import registrationFormValidations from './validations';

import Input from '../Fields/Input';

const Registration = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Field type="text" name="name" component={Input} placeholder="John Smith" validate={registrationFormValidations.name} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Field type="text" name="email" component={Input} placeholder="someone@somewhere.com" validate={registrationFormValidations.email} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Field type="text" name="username" component={Input} placeholder="whiskeylover2" validate={registrationFormValidations.username} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Field type="password" name="password" component={Input} placeholder="Pick something secure!" validate={registrationFormValidations.password} />
      </Form.Group>
      <Button type='submit'>Register</Button>
    </Form>
  );
}

export const submit = (data) => {
  console.log(data);
}

export default Registration;