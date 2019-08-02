import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateEventPage from "../pages/CreateEventPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

Routes = () => {
  const currentUser = Meteor.user();
  console.log(currentUser);
  const isLoggedIn = !!currentUser;
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect from="*" to="/home" />
      </Switch>
    );
  }

  return (
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
};

export default withTracker(() => {
  // Meteor.subscribe('myTodos'); // NEW!
  return {
    currentUser: Meteor.user()
    // currentUserId:Meteor.user
  };
})(Routes);
