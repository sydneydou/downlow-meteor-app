import React, { Component } from "react";
import AccountForm from "../../components/AccountForm";
import LoginForm from "../../components/LoginForm";
import "./styles.css";

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <AccountForm />
      <LoginForm />
      <button
        type="button"
        onClick={() => {
          console.log("toggle");
          // form.reset();
          // this.setState({
          //   formToggle: !this.state.formToggle
          // });
        }}
      >
        Test Button
        {/* {this.state.formToggle
          ? "Create an account."
          : "Login to existing account."} */}
      </button>
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
