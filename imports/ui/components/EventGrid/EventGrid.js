import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EventCard from "../EventCard";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
//show all event only for homepage
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
      <div style={{ marginTop: -16 }}>
        {this.props.location.pathname === "/home" && (
          <Button
            variant="contained"
            onClick={() => {
              this.showAllEvents();
            }}
          >
            {showAllEvents ? "View Events I'm Attending" : "View All Events"}
          </Button>
        )}

        {showAllEvents ? (
          <div>
            <h2 className={classes.color}>View All Events</h2>
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.homeContainer}
              spacing={5}
            >
              {events &&
                events.map(event => (
                  <EventCard key={event._id} event={event} />
                ))}
            </Grid>
          </div>
        ) : (
          <div>
            <h2 className={classes.color}>View Events I'm Attending</h2>

            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.homeContainer}
              spacing={5}
            >
              {events &&
                events
                  .filter(event => event.reserved.includes(Meteor.userId()))
                  .map(event => <EventCard key={event._id} event={event} />)}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(EventGrid));
