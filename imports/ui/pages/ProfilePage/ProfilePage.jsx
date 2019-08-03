import React, { Component } from "react";
import ProfileCard from "../../components/ProfileCard";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

class ProfilePage extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <ProfileCard currentUser={currentUser} />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(ProfilePage);
