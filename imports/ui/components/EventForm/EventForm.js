import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Meteor } from "meteor/meteor";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";

const validate = values => {};
const onSubmit = (values, currentUser) => {
  event.preventDefault();
  const newEvent = {
    title: values.eventName,
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
  return (
    <Form
      onSubmit={values => onSubmit(values, currentUser)}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <form>
          <h2>Create An Event</h2>
          <div className={classes.container}>
            <div className={classes.columnOne}>
              <Field
                name="title"
                render={({ input, meta }) => (
                  <div className={classes.field}>
                    <label>Event Name</label>
                    <textarea {...input} className={classes.fieldInput} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <Field
                name="eventDescription"
                render={({ input, meta }) => (
                  <div className={classes.field}>
                    <label>Event Description</label>
                    <textarea {...input} className={classes.fieldInput} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <Field
                name="artist"
                render={({ input, meta }) => (
                  <div className={classes.field}>
                    <label>Artist</label>
                    <textarea {...input} className={classes.fieldInput} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </div>
            <div className={classes.columnTwo}>
              <Field
                name="date"
                render={({ input, meta }) => (
                  <div className={classes.field}>
                    <label>Date</label>
                    <textarea {...input} className={classes.fieldInput} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <Field
                name="location"
                render={({ input, meta }) => (
                  <div className={classes.field}>
                    <label>Location</label>
                    <textarea {...input} className={classes.fieldInput} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <Field
                name="genre"
                render={({ input, meta }) => (
                  <div className={classes.field}>
                    <label>Genre</label>
                    <textarea {...input} className={classes.fieldInput} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </div>
            <button className={classes.button} type="submit" onClick={handleSubmit}>
            Submit
          </button>
          </div>

         
        </form>
      )}
    />
  );
};

export default withStyles(styles)(EventForm);
