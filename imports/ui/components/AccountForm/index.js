import React, { Component } from "react";
import { Form, Field } from "react-final-form";

const validate = values => {};
const onSubmit = values => {
  
  var registerData = {
    username: event.target.registerUsername.value,
    email: event.target.registerEmail.value,
    password: event.target.registerPassword.value
 }

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
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form>
        <h2>Login</h2>

        <Field
          name="Username"
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

        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
);

export default AccountForm;
