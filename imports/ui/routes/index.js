import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateEventPage from "../pages/CreateEventPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
// const isLoggedIn = !!currentUser 
export default () => {
   

    // if (isLoggedIn) {
    //     return (
    //       <Switch>
    //         <Route path="/welcome" component={HomeContainer} />
    //         <Redirect from="*" to="/welcome" />
    //       </Switch>
    //     );
    //   }

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
      )
    };
