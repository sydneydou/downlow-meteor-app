import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";

const Banner = ({ currentUser, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.BannerTextPosition}>
        {/* <h1 className={classes.dL}>DownLow</h1> */}
        <img src="assets/dl-logo-header.svg" className={classes.DlLogo} />
        <p className={classes.BannerText}>
          Hey {currentUser.username}, welcome to DownLow! <br /> Where you can
          create and attend the closest underground <br /> events at your own
          convenience!
        </p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  currentUser: PropTypes.shape({
    emails: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }),
  classes: PropTypes.object.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    currentUser: Meteor.user()
  };
})(withStyles(styles)(Banner));
