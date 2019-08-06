import React from "react";

class AccountForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;

    return (
      <Form
        validate={validate.bind(this)}
        render={({ handleSubmit, pristine, invalid, submitting, form }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="fullname">Username</InputLabel>

                <Field name="fullname">
                  {({ input, meta }) => (
                    <Input
                      id="fullname"
                      type="text"
                      inputProps={{
                        ...input,
                        autoComplete: "off"
                      }}
                      value={input.value}
                    />
                  )}
                </Field>
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email">
                {({ input, meta }) => (
                  <Input
                    id="email"
                    type="text"
                    inputProps={{
                      ...input,
                      autoComplete: "off"
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>

              <Field name="password">
                {({ input, meta }) => (
                  <Input
                    id="password"
                    type="password"
                    inputProps={{
                      ...input,
                      autoComplete: "off"
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={pristine || invalid}
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      form.reset();
                      this.setState({
                        formToggle: !this.state.formToggle
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? "Create an account."
                      : "Login to existing account."}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
            <Typography className={classes.errorMessage}>
              {this.state.error && this.state.formToggle}
            </Typography>
          </form>
        )}
      />
    );
  }
}
