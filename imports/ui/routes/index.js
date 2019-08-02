import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateEventPage from "../pages/CreateEventPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import Header from "../components/Header";

Routes = props => {
  if (props.currentUser) {
    return (
      <Switch>
        {/* <Header /> */}
        <Route path="/home" component={HomePage} exact />
        <Route path="/create" component={CreateEventPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Redirect from="*" to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/welcome" component={LoginPage} exact />
      <Redirect path="*" to="/welcome" />
    </Switch>
  );
};

export default withTracker(() => {
  // Meteor.subscribe('myTodos'); // NEW!
  return {
    currentUser: Meteor.userId
    // currentUserId:Meteor.user
  };
})(Routes);
