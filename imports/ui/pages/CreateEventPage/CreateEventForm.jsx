import React, { Component } from "react";
import { Form, Field } from "react-final-form";

const validate = values => {};
const onSubmit = values => {
  // calling the fields?

  var registerData = {
    username: event.target.registerUsername.value,
    email: event.target.registerEmail.value,
    password: event.target.registerPassword.value
  };

  Accounts.createUser(registerData, function(error) {
    if (Meteor.user()) {
      console.log(Meteor.userId());
    } else {
      console.log("ERROR: " + error.reason);
    }
  });
};

const CreateEventForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form>
        <h2>Create An Event</h2>
        {/* Event Name */}
        <Field
          name="Event"
          render={({ input, meta }) => (
            <div>
              <label>Event Name:</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        {/* Event Info */}
        <Field
          name="EventInfo"
          render={({ input, meta }) => (
            <div>
              <label>Event Info:</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        {/* Artist */}
        <Field
          name="Artist"
          render={({ input, meta }) => (
            <div>
              <label>Artist:</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        {/* Location */}
        <Field
          name="Location"
          render={({ input, meta }) => (
            <div>
              <label>Location:</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />
        {/* Genre */}
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
        {/* Price */}
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
        {/* Time */}
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
  />
);

export default CreateEventForm;
