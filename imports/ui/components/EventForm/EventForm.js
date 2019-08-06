import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Meteor } from "meteor/meteor";

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

//meteor call method

const EventForm = ({ currentUser }) => {
  return (
    <Form
      onSubmit={values => onSubmit(values, currentUser)}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <form>
          <h2>Create An Event</h2>
          <Field
            name="title"
            render={({ input, meta }) => (
              <div>
                <label>Event Name:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="eventDescription"
            render={({ input, meta }) => (
              <div>
                <label>Event Description:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="artist"
            render={({ input, meta }) => (
              <div>
                <label>Artist:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="date"
            render={({ input, meta }) => (
              <div>
                <label>Date:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="location"
            render={({ input, meta }) => (
              <div>
                <label>Location:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="genre"
            render={({ input, meta }) => (
              <div>
                <label>Genre:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    />
  );
};

export default EventForm;
