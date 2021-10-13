import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, PageNotFound } from "./Common";

export default function MainSwitch(): ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}
