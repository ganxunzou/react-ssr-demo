import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route) => {
            const { path, component } = route;
            return <Route path={path} component={component} exact />;
          })}
        </Switch>
      </div>
    );
  }
}

export default Layout;
