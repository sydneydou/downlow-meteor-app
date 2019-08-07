import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateEventPage from "../pages/CreateEventPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Header from "../components/Header";

const Routes = props =>
  props.currentUser ? (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} exact />
        <Route path="/create" component={CreateEventPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Redirect from="*" to="/home" />
      </Switch>
    </Fragment>
  ) : (
    <Switch>
      <Route path="/welcome" component={LoginPage} exact />
      <Redirect path="*" to="/welcome" />
    </Switch>
  );

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(Routes);
