import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import EventGrid from "../../components/EventGrid";
import { Events } from "../../../api/events";
import Button from "@material-ui/core/Button";
import Banner from "../../components/Banner";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class HomePage extends Component {
  render() {
    const { currentUser, classes, events } = this.props;
    return (
      <div>
        <h1 style={{ height: 50 }}>
          Welcome to DownLow {currentUser.username}!
        </h1>
        <Banner />
        <div className={classes.gradientContainer}>
          <EventGrid events={events} />
        </div>
      </div>
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
})(withStyles(styles)(HomePage));
