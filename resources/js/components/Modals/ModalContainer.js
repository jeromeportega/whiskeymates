import React from 'react';
import LoginRegister from './LoginRegister/LoginRegister';

const modals = {
  'login-register': LoginRegister,
}

const ModalContainer = (props) => {
  const SelectedModal = modals[props.slug];

  return (
    <SelectedModal {...props} />
  );
};

export default ModalContainer;