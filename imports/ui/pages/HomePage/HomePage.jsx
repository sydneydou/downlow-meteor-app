import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import EventGrid from "../../components/EventGrid";
import { Events } from "../../../api/events";
import Button from "@material-ui/core/Button";
import Banner from "../../components/Banner";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from 'prop-types';
class HomePage extends Component {
  render() {
    const { classes, events } = this.props;
    console.log(events);
    return (
      <div>
        <Banner />
        <div className={classes.gradientContainer}>
          <EventGrid events={events} />
        </div>
      </div>
    );
  }
}

// HomePage.proptypes = {
//   classes: PropTypes.object,
//   events: PropTypes.object
// }

export default withTracker(() => {
  Meteor.subscribe("events");
  return {
    currentUser: Meteor.user(),
    events: Events.find()
      .fetch()
      .filter(event => event.createdBy !== Meteor.userId())
  };
})(withStyles(styles)(HomePage));
