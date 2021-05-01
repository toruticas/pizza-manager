import { Switch, Route } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { routes } from 'routes/mount';

const Pages = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
    <Route path='/'>
      <Dashboard />
    </Route>
  </Switch>
);

export { Pages };
