import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import EventGrid from "../../components/EventGrid";

class HomePage extends Component {
  render() {
    const { currentUser, classes } = this.props;
    return (
      <div>
        <h1>Welcome to DownLow {currentUser.username}!</h1>
        {/* <EventGrid /> */}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(HomePage);
