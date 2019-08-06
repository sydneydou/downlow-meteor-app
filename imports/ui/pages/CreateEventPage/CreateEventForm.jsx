import React, { Component } from "react";
import { Form, Field } from "react-final-form";

// FIXME: make me a stateful component

const validate = values => {};

const onSubmit = eventdata => {
  eventdata.preventDefault();
  Meteor.call("Events.addEvent", eventdata);
};


    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <form>
          <h2>Create An Event</h2>
          <Field
            name="event"
            render={({ input, meta }) => (
              <div>
                <label>Event Name:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="eventinfo"
            render={({ input, meta }) => (
              <div>
                <label>Event Info:</label>
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
          <Field
            name="price"
            render={({ input, meta }) => (
              <div>
                <label>Price:</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
          <Field
            name="time"
            render={({ input, meta }) => (
              <div>
                <label>Time:</label>
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
    />;

export default CreateEventForm;
