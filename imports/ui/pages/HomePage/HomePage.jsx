import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import EventGrid from "../../components/EventGrid";
import { Events } from "../../../api/events";

class HomePage extends Component {
  render() {
    const { currentUser, classes, events } = this.props;
    return (
      // <div>
      //   <h1>Welcome to DownLow {currentUser.username}!</h1>
      <EventGrid events={events} />
      // </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    currentUser: Meteor.user(),
    events: Events.find()
      .fetch()
      .filter(event => event.createdBy !== Meteor.userId())
  };
})(HomePage);
