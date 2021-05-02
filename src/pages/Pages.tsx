import { Switch, Route } from 'react-router-dom';

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
  </Switch>
);

export { Pages };
