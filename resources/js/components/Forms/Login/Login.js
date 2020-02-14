import React from 'react';
import { Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';

import loginFormValidations from './validations';

import Input from '../Fields/Input';

const Login = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Field type="text" name="email" component={Input} placeholder="someone@somewhere.com" validate={loginFormValidations.email} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Field type="password" name="password" component={Input} placeholder="Pick something secure!" validate={loginFormValidations.password} />
      </Form.Group>
      <Button type='submit'>Log In!</Button>
    </Form>
  );
}

export default Login;