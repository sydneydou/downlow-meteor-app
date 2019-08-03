import React, { Component } from "react";
import { Form, Field } from "react-final-form";

//TODO: this is the rough code outline for login
//TODO: add to onSubmit and include toggle between login and register forms

const validate = values => {};
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

const LoginForm = () => (
  <Form
    onSubmit={values => onSubmit(values)}
    validate={() => validate()}
    render={({ handleSubmit, pristine, invalid }) => (
      <form>
        <h2>Login</h2>

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

        <button
          type="submit"
          disabled={pristine || invalid}
          onClick={handleSubmit}
        >
          Welcome Back!
        </button>
      </form>
    )}
  />
);

export default LoginForm;
