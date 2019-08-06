import React, { Component } from "react";
import ProfileCard from "../../components/ProfileCard";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import styles from "./styles";

class ProfilePage extends Component {
  render() {
    const { currentUser, classes } = this.props;
    return (
      <div className={classes.profilepage}>
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
