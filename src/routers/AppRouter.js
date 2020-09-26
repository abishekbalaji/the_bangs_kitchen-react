import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BangsMain from "../components/BangsMain";
import About from "../components/About";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={BangsMain} exact={true} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
