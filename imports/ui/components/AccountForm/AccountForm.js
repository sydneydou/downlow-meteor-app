import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Accounts } from "meteor/accounts-base";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const validate = values => {};
const onSubmit = values => {
  event.preventDefault();
  const registerData = {
    username: values.username,
    email: values.email,
    password: values.password
  };
  Accounts.createUser(registerData, function(error) {
    return registerData;
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
          Submit
        </Button>
      </form>
    )}
  />
);

AccountForm.propTypes = {
  classes: PropTypes.string.isRequired
};

export default withStyles(styles)(AccountForm);
