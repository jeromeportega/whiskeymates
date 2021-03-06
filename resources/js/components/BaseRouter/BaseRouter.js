import React, { useMemo } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';

const BaseRouter = () => {

  const renderedRoutes = useMemo(() => routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />));

  return (
    <React.Fragment>
      <Switch>
        {renderedRoutes}
      </Switch>
    </React.Fragment>
  );
}

export default BaseRouter;