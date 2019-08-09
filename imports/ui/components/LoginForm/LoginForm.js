import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
// import { NavigationFullscreen } from "material-ui/svg-icons";

//TODO: this is the rough code outline for login
//TODO: add to onSubmit and include toggle between login and register forms

const validate = values => {}; //TODO: Validation
// when a function is being passed into a another function, just simply call it as an argument
const onSubmit = (values, handleError) => {
  event.preventDefault();
  var myEmail = values.email;
  var myPassword = values.password;

  Meteor.loginWithPassword(myEmail, myPassword, function(error) {
    if (Meteor.user()) {
      console.log(Meteor.userId());
      handleError(null);
    } else {
      console.log("ERROR: " + error);
      handleError(error);
    }
  });
};

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }

  handleError = error => {
    this.setState({ error });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Form
          className={classes.Form}
          onSubmit={values => onSubmit(values, this.handleError)}
          validate={() => validate()}
          render={({ handleSubmit, pristine, invalid }) => (
            <form>
              <h2 className={classes.LoginTitle}>Login</h2>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div>
                    <textarea
                      className={
                        this.state.error && this.state.error.reason
                          ? classes.showErrorColor
                          : classes["input-field"]
                      }
                      {...input}
                      placeholder="Email"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <div>
                    <input
                      className={
                        this.state.error && this.state.error.reason
                          ? classes.showErrorColor
                          : classes["input-field"]
                      }
                      {...input}
                      type="password"
                      placeholder="Password"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <Button
                className={classes.btn}
                variant="contained"
                type="submit"
                disabled={pristine || invalid}
                onClick={handleSubmit}
              >
                Welcome Back!
              </Button>
            </form>
          )}
        />
        <p className={classes.errorMessage}>
          {this.state.error && this.state.error.reason + `! Please try again!`}
        </p>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
