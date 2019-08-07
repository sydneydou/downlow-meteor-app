import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Accounts } from "meteor/accounts-base";
import Button from "@material-ui/core/Button";

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
  console.log(values.password);
  event.preventDefault();
  const registerData = {
    username: values.username,
    email: values.email,
    password: values.password
  };
  console.log(registerData);

  Accounts.createUser(registerData, function(error) {
    if (Meteor.user()) {
      console.log(Meteor.userId());
    } else {
      console.log("ERROR: " + error.reason);
    }
  });
};

const AccountForm = () => (
  <Form
    onSubmit={values => onSubmit(values)}
    validate={() => validate()}
    render={({ handleSubmit, pristine, invalid }) => (
      <form>
        <h2>Create an Account</h2>

        <Field
          name="username"
          render={({ input, meta }) => (
            <div>
              <label>Username</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field
          name="email"
          render={({ input, meta }) => (
            <div>
              <label>Email</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Field
          name="password"
          render={({ input, meta }) => (
            <div>
              <label>Password</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <Button
          variant="contained"
          color="#19EBFF"
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

export default AccountForm;
