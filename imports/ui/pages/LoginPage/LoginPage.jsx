import React, { Component } from "react";
import AccountForm from "../../components/AccountForm";
import LoginForm from "../../components/LoginForm";
import "./styles.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true
    };
  }

  showLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };
  render() {
    const { showLogin } = this.state;
    return (
      <div className="login-wrapper">
        {showLogin ? <LoginForm /> : <AccountForm />}
        <button
          type="button"
          onClick={() => {
            this.showLogin();
          }}
        >
          {showLogin ? "Create an account" : "Login Here"}
        </button>
      </div>
    );
  }
}

export default LoginPage;
