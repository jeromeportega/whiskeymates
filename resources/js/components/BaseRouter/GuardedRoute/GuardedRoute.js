import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const GuardedRoute = ({ children, user, ...rest }) => {
  const history = useHistory();
  console.log(user.current);

  return (
    <Route
      {...rest}
      render={() =>
        user.api_token ? (
          children
        ) : (
          history.push("/")
        )
      }
    />
  );
};

const mapStateToProps = ({ user }) => ({
  user: user || {},
});

export default connect(mapStateToProps)(GuardedRoute);