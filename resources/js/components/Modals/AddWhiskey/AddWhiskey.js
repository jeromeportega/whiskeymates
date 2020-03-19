import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { submitAddWhiskeyForm as submitAddWhiskeyFormAction } from '../../../actions/whiskey';

import Form from '../../Forms/Form';

import { ModalContentsContainer } from './styles';

const AddWhiskey = ({
  submitAddWhiskeyForm,
  show,
  onHide,
  closeModal,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitFormHandler = values => {
    setIsSubmitting(true);

    submitAddWhiskeyForm({
      values,
      setIsSubmitting,
      closeModal,
    });
  }

  return (
    <Modal show={show} onHide={onHide}>
      <ModalContentsContainer>
        <Form slug='add-whiskey' onSubmit={submitFormHandler} isSubmitting={isSubmitting} />
      </ModalContentsContainer>
    </Modal>
  );
}

export default connect(null, {
  submitAddWhiskeyForm: submitAddWhiskeyFormAction,
})(AddWhiskey);