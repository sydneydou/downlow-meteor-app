import EventForm from "../../components/EventForm";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

class CreateEventPage extends Component {
  render() {
    const { currentUser, classes } = this.props;
    return (
      <div>
        <EventForm currentUser={currentUser} />
      </div>
    );
  }
}

CreateEventPage.propType

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(CreateEventPage);
