import EventForm from "../../components/EventForm";
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
class CreateEventPage extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <EventForm currentUser={currentUser} />
      </div>
    );
  }
}

CreateEventPage.propType = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    emails: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(CreateEventPage);
