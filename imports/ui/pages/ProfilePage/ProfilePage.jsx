import React, { Component } from "react";
import ProfileCard from "../../components/ProfileCard";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import EventGrid from "../../components/EventGrid";
import { Events } from "../../../api/events";
import PropTypes from "prop-types";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, classes, userEvents } = this.props;

    return (
      <div className={classes.GradientContainer}>
        <ProfileCard currentUser={currentUser} />
        {userEvents.length > 0 ? (
          <div>
            <h1 className={classes.ProfileHeader}>Events You Have Created</h1>
            <EventGrid events={userEvents} />
          </div>
        ) : (
          <div className={classes.HeaderContainer}>
            <h2 className={classes.ProfileHeader}>
              You haven't created any events yet!
            </h2>
          </div>
        )}
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object,
  events: PropTypes.array
};

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    currentUser: Meteor.user(),
    userEvents: Events.find()
      .fetch()
      .filter(event => event.createdBy === Meteor.userId())
  };
})(withStyles(styles)(ProfilePage));
