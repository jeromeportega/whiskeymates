import React from 'react';
import LoginRegister from './LoginRegister/LoginRegister';
import AddWhiskey from './AddWhiskey/AddWhiskey';

const modals = {
  'login-register': LoginRegister,
  'add-whiskey': AddWhiskey,
}

const ModalContainer = (props) => {
  const SelectedModal = modals[props.slug];

  return (
    <SelectedModal {...props} />
  );
};

export default ModalContainer;