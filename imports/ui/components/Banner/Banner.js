import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
import { withTracker } from "meteor/react-meteor-data";

const Banner = ({ currentUser, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.bannerTextPosition}>
        <h1 className={classes.dL}>DownLow</h1>
        <p className={classes.bannerText}>
          Hey {currentUser.username}, Welcome to DownLow! <br /> Where you can
          create and attend the closest underground <br /> events at your own
          convenience!
        </p>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    currentUser: Meteor.user(),
    // events: Events.find()
    //   .fetch()
    //   .filter(event => event.createdBy !== Meteor.userId())
  };
})(withStyles(styles)(Banner));
