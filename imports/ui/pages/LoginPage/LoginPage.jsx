import React, { Component } from "react";
import AccountForm from "../../components/AccountForm";
import LoginForm from "../../components/LoginForm";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

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
      <div className={classes.LoginPageBg}>
        <div className={classes.loginWrapper}>
        <h1 className={classes.dlLogo}>DownLow</h1>
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
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginPage);
