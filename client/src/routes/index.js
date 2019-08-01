import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";

export default () => (
  <Fragment>
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/create" component={CreateEventPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/welcome" component={LoginPage} exact />
      <Redirect path="*" to="/home" />
    </Switch>
  </Fragment>
);
