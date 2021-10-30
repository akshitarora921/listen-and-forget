import React from "react";
import { Route, Switch } from "react-router-dom";
import routeConfig from "./route-config";

function Routes(/* {authStore} */) {
  const { routes } = routeConfig;

  return (
    <Switch>
      {routes.map((route) => {
        const { component: Component, path, exact } = route;
        return <Route path={path} component={Component} exact={exact} />;
      })}
    </Switch>
  );
}

export default Routes;
