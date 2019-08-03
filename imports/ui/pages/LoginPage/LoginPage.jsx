import React, { Component } from "react";
import AccountForm from "../../components/AccountForm";
import LoginForm from "../../components/LoginForm";
import "./styles.css";

LoginPage = () => {
  //TODO:we can use this isLoggedIn to verfiy if user is logged in and then create a conditional statement
  // const { currentUser } = this.props;
  //   const isLoggedIn = !!currentUser;
  return (
    <div className="login-wrapper">
      <AccountForm />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

//withTracker retrieves info we need about current user from users collection
// export default withTracker(() => {
//   // Meteor.subscribe('myTodos'); // NEW!
//   return {
//     currentUser: Meteor.user()
//   };
// })(LoginPage);
