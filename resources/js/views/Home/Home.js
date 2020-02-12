import React, { useState } from 'react';
import ModalContainer from '../../components/Modals/ModalContainer'

const Home = () => {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);

  return (
    <div>
      <h1>Welcome to Whiskeymates!</h1>
      <button onClick={() => setShowLoginRegisterModal(true)}>Login</button>
      <ModalContainer slug='login-register' show={showLoginRegisterModal} onHide={() => setShowLoginRegisterModal(false)} />
    </div>
  );
}

export default Home;