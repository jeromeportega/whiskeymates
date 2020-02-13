import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ input, meta, placeholder }) => {
  const isInvalid = meta.touched && meta.error;
  
  return (
    <React.Fragment>
      <Form.Control as='input' {...input} placeholder={placeholder} isInvalid={isInvalid} />
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </React.Fragment>
  );
}

export default Input;