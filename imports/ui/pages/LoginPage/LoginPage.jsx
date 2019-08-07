import React, { Component } from "react";
import AccountForm from "../../components/AccountForm";
import LoginForm from "../../components/LoginForm";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";

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
    const { classes } = this.props;
    return (
      <div className={classes.loginWrapper}>
        {showLogin ? <LoginForm /> : <AccountForm />}
        <Button
          className={classes.btn}
          type="button"
          onClick={() => {
            this.showLogin();
          }}
        >
          {showLogin ? "Create an account" : "Login Here"}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
