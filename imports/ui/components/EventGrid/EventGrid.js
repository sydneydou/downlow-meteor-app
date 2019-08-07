import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EventCard from "../EventCard";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";

class EventGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllEvents: true
    };
  }
  showAllEvents = () => {
    this.setState({
      showAllEvents: !this.state.showAllEvents
    });
  };

  render() {
    const { showAllEvents } = this.state;
    const { classes, events } = this.props;
    return (
      <div>
        {showAllEvents ? (
          <Button
            variant="contained"
            onClick={() => {
              this.showAllEvents();
            }}
          >
            Events I'm Attending
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              this.showAllEvents();
            }}
          >
            All Events
          </Button>
        )}
        {showAllEvents ? (
          <Grid container direction="row" justify="space-between" spacing={5}>
            {events &&
              events.map(event => <EventCard key={event._id} event={event} />)}
          </Grid>
        ) : (
          <Grid container direction="row" justify="space-between" spacing={5}>
            {events &&
              events
                .filter(event => event.reserved.includes(Meteor.userId()))
                .map(event => <EventCard key={event._id} event={event} />)}
          </Grid>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(EventGrid);
