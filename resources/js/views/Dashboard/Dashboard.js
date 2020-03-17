import React, { useState } from 'react';
import { connect } from 'react-redux';

import WhiskeyList from './WhiskeyList/WhiskeyList';
import ModalContainer from '../../components/Modals/ModalContainer';

import { DashboardContainer } from './styles';

const Dashboard = ({
  whiskies,
}) => {
  const [showAddWhiskeyModal, setShowAddWhiskeyModal] = useState(false);
    
  return (
    <DashboardContainer>
      <h1>Jerry's Whiskey List</h1>
      {
        whiskies.length > 0 ?
          <WhiskeyList whiskies={whiskies} />
        :
          <h3>You have no whiskies yet!  <a href="#" onClick={() => setShowAddWhiskeyModal(true)}>Add one now!</a></h3>
      }
      <ModalContainer
        slug='add-whiskey'
        show={showAddWhiskeyModal}
        onHide={() => setShowAddWhiskeyModal(false)}
        closeModal={() => setShowAddWhiskeyModal(false)}
      />
    </DashboardContainer>
  );
}

const mapStateToProps = state => ({
  whiskies: state.whiskies || [],
});

export default connect(mapStateToProps)(Dashboard);