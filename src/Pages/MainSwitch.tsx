import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, NotFoundPage } from "./Common";

export default function MainSwitch(): ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}
