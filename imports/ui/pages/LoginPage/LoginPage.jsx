import React, { Component } from "react";
import AccountForm from "../../components/AccountForm";
import LoginForm from "../../components/LoginForm";
import "./styles.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <AccountForm />
        <LoginForm />
        <button
          type="button"
          onClick={() => {
            console.log("toggle");
          }}
        >
          Test Button
        </button>
      </div>
    );
  }
}

export default LoginPage;
