import React, { useState } from 'react';
import ModalContainer from '../../components/Modals/ModalContainer'

const Home = () => {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);

  const loginButtonClickHandler = () => {
    setShowLoginRegisterModal(true);
  }

  const loginRegisterModalHideHandler = () => {
    setShowLoginRegisterModal(false)
  }

  return (
    <div>
      <h1>Welcome to Whiskeymates!</h1>
      <button onClick={loginButtonClickHandler}>Login</button>
      <ModalContainer slug='login-register' show={showLoginRegisterModal} onHide={loginRegisterModalHideHandler} />
    </div>
  );
}

export default Home;