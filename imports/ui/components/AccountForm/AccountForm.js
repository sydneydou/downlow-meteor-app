import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Accounts } from "meteor/accounts-base";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from 'prop-types';


//TODO: this is the rough code outline for login
//TODO: add to onSubmit and include toggle between login and register forms
// event.preventDefault();
// var myEmail = event.target.loginEmail.value;
// var myPassword = event.target.loginPassword.value;

// Meteor.loginWithPassword(myEmail, myPassword, function(error) {

//    if (Meteor.user()) {
//       console.log(Meteor.userId());
//    } else {
//       console.log("ERROR: " + error.reason);
//    }
// });

const validate = values => {};
const onSubmit = values => {
  event.preventDefault();
  const registerData = {
    username: values.username,
    email: values.email,
    password: values.password
  };

  Accounts.createUser(registerData, function(error) {
    if (Meteor.user()) {
      console.log(Meteor.userId());
    } else {
      console.log("ERROR: " + error.reason);
    }
  });
};

const AccountForm = ({ classes }) => (
  <Form
    onSubmit={values => onSubmit(values)}
    validate={() => validate()}
    render={({ handleSubmit, pristine, invalid }) => (
      <form>
        <h2 className={classes.CreateTitle}>Create an Account</h2>

        <Field
          name="username"
          render={({ input, meta }) => (
            <div>
              <textarea
                {...input}
                placeholder="Username"
                className={classes["input-field"]}
              />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

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
          Submit
        </Button>
      </form>
    )}
  />
);

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AccountForm);
