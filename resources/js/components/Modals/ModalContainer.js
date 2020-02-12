import React from 'react';
import { Modal } from 'react-bootstrap';

import LoginRegister from './LoginRegister/LoginRegister';

const modals = {
  'login-register': LoginRegister,
}

const ModalContainer = ({ slug, show, onHide, modalMeta }) => {
  const SelectedModal = modals[slug];

  return (
    <Modal show={show} onHide={onHide}>
      <SelectedModal {...modalMeta} />
    </Modal>
  );
};

export default ModalContainer;