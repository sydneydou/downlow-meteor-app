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
      // 3. use handleError to catch the error and same as above
      handleError(error);
      // return this error message onto screen
    }
  });
};

class LoginForm extends Component {
  constructor() {
    super();
    // 1. start the default state
    this.state = {
      error: null
    };
  }

  // 2. create a function that will turn null into a new given state from user
  handleError = error => {
    this.setState({ error });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Form
          className={classes.Form}
          // 4. pass the function down as props
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
        {/* 5. Show the errors on the browser  */}
        <p>{this.state.error && this.state.error.reason}</p>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
