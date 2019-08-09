import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

//TODO: this is the rough code outline for login
//TODO: add to onSubmit and include toggle between login and register forms

// const bcrypt = require('bcryptjs');

const validate = values => {}; //TODO: Validation
const onSubmit = (values, handleError) => {
  event.preventDefault();
  var myEmail = values.email;
  var myPassword = values.password;
  // const hashedPassword = await bcrypt.hash(myPassword, 10);

  Meteor.loginWithPassword(myEmail, myPassword, function(error) {
    if (Meteor.user()) {
      console.log(Meteor.userId());
      handleError(null);
    } else {
      console.log("ERROR: " + error);
      handleError(error);
      // error.reason ? alert("<div>Sorry! Your User/Password is incorrect! <br/> Please try again! </div>" ) : null
      //return this error message onto screen
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
                      {...input}
                      placeholder="Email"
                      className={classes["input-field"]}
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
                      {...input}
                      type="password"
                      placeholder="Password"
                      className={classes["input-field"]}
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
        <p>{this.state.error && this.state.error.reason}</p>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
