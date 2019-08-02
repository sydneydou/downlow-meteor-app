import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Accounts } from "meteor/accounts-base";

const validate = values => {};
const onSubmit = values => {
  event.preventDefault();
  // var registerData = {
  //   username: event.target.registerUsername.value,
  //   email: event.target.registerEmail.value,
  //   password: event.target.registerPassword.value
  // };
  console.log("test");
  console.log(values);

  // Accounts.createUser(registerData, function(error) {
  //   if (Meteor.user()) {
  //     console.log(Meteor.userId());
  //   } else {
  //     console.log("ERROR: " + error.reason);
  //   }
  // });
};

const AccountForm = () => (
  <Form
    onSubmit={values => onSubmit(values)}
    validate={() => validate()}
    render={({ handleSubmit, pristine, invalid }) => (
      <form>
        <h2>Login</h2>

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

        <button
          type="submit"
          // disabled={pristine || invalid}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    )}
  />
);

export default AccountForm;
