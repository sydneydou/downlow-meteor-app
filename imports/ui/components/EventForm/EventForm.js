import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Meteor } from "meteor/meteor";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const validate = values => {};
const onSubmit = (values, currentUser) => {
  event.preventDefault();
  const newEvent = {
    title: values.title,
    artist: values.artist,
    date: values.date,
    genre: values.genre,
    location: values.location,
    reserved: [],
    createdBy: Meteor.userId()
  };
  Meteor.call("events.newEvent", newEvent);
};

const EventForm = ({ currentUser, classes }) => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Form
        onSubmit={values => {
          onSubmit(values, currentUser);
          handleClickOpen();
        }}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form>
            <h2>Create An Event</h2>
            <div>
              <div className={classes.container}>
                <div className={classes.columnOne}>
                  <Field
                    name="title"
                    render={({ input, meta }) => (
                      <div>
                        <textarea
                          {...input}
                          placeholder="Event Name"
                          className={classes["input-field"]}
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                  <Field
                    name="eventDescription"
                    render={({ input, meta }) => (
                      <div>
                        <textarea
                          {...input}
                          placeholder="Event Description"
                          className={classes["input-field"]}
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                  <Field
                    name="artist"
                    render={({ input, meta }) => (
                      <div>
                        <textarea
                          {...input}
                          placeholder="Artist"
                          className={classes["input-field"]}
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className={classes.columnTwo}>
                  <Field
                    name="date"
                    render={({ input, meta }) => (
                      <div>
                        <textarea
                          {...input}
                          placeholder="Date"
                          className={classes["input-field"]}
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                  <Field
                    className={classes["input-field"]}
                    name="location"
                    render={({ input, meta }) => (
                      <div>
                        <textarea
                          {...input}
                          placeholder="Location"
                          className={classes["input-field"]}
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                  <Field
                    name="genre"
                    render={({ input, meta }) => (
                      <div>
                        <textarea
                          {...input}
                          placeholder="Genre"
                          className={classes["input-field"]}
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              <Button
                className={classes.btn}
                type="submit"
                onClick={handleSubmit}
                disabled={pristine || invalid}
                className={classes.button}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      />
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Congrats!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You just successfully created an event! This event will now be
              visible for all users to attend.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/profile">
              <Button onClick={handleClose}>Show me my new event!</Button>
            </Link>
            <Link to="/home">
              <Button onClick={handleClose}>Show me other events!</Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default withStyles(styles)(EventForm);
