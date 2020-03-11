import React, { useState } from 'react';
import ModalContainer from '../../components/Modals/ModalContainer'

const Home = () => {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);

  const loginButtonClickHandler = () => {
    setShowLoginRegisterModal(true);
  }

  const closeLoginRegisterModal = () => {
    setShowLoginRegisterModal(false)
  }

  return (
    <div>
      <h1>Welcome to Whiskeymates!</h1>
      <button onClick={loginButtonClickHandler}>Login</button>
      <ModalContainer slug='login-register' show={showLoginRegisterModal} onHide={closeLoginRegisterModal} closeModal={closeLoginRegisterModal} />
    </div>
  );
}

export default Home;