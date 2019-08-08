import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

//
//TODO: this is the rough code outline for login
//TODO: add to onSubmit and include toggle between login and register forms

// const passwordHash = require('./lib/password-hash');
// const hashedPassword = 'sha1$3I7HRwy7$cbfdac6008f9cab4083784cbd1874f76618d2a97';

// console.log(passwordHash.verify('password', hashedPassword)); // true
// console.log(passwordHash.verify('password', hashedPassword)); // false

const validate = values => {}; //TODO: Validation
const onSubmit = values => {
  event.preventDefault();
  var myEmail = values.email;
  var myPassword = values.password;

  Meteor.loginWithPassword(myEmail, myPassword, function(error) {
    if (Meteor.user()) {
      console.log(Meteor.userId());
    } else {
      console.log("ERROR: " + error.reason);
      //return this error message onto screen
    }
  });
};

const LoginForm = ({ classes }) => (
  <Form
    className={classes.Form}
    onSubmit={values => onSubmit(values)}
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
              <textarea
                {...input}
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
);

export default withStyles(styles)(LoginForm);
