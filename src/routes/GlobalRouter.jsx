import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { routes } from "./routes";

export function GlobalRouter() {
  return (
    <BrowserRouter>
      {routes.map((route, i) => (
        <Route key={i} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </BrowserRouter>
  );
}