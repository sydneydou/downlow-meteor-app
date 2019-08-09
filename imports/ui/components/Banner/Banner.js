import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
import { withTracker } from "meteor/react-meteor-data";

const Banner = ({ currentUser, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.bannerTextPosition}>
        <span className={classes.dL}>DownLow</span>
        <h1 className={classes.bannerText}>
          Hey {currentUser.username}, Welcome to DownLow! <br /> Where you can
          create and attend the closest underground <br /> events at your own
          convenience!
        </h1>
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
