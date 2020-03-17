import React from 'react';
import { Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';

import addWhiskeyValidations from './validations';

import Input from '../Fields/Input';

const AddWhiskey = ({ handleSubmit, isSubmitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Field
          type="text"
          name="type"
          component={Input}
          placeholder="Bourbon"
          validate={addWhiskeyValidations.type}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Age</Form.Label>
        <Field
          type="number"
          name="age"
          component={Input}
          placeholder="12"
          validate={addWhiskeyValidations.age}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Barrel</Form.Label>
        <Field
          type="text"
          name="barrel"
          component={Input}
          placeholder="Port"
          validate={addWhiskeyValidations.barrel}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Distillery</Form.Label>
        <Field
          type="text"
          name="distillery"
          component={Input}
          placeholder="The Balvenie"
          validate={addWhiskeyValidations.distillery}
        />
      </Form.Group>
      <Button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Add Whiskey'}</Button>
    </Form>
  );
}

export default AddWhiskey;