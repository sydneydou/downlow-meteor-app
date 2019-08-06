import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import React, { Component } from "react";

class HomePage extends Component {
  render() {
    const { currentUser, classes } = this.props;
    console.log(currentUser);
    return (
      <div>
        <h1>Welcome to DownLow {currentUser.username}!</h1>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(HomePage);
