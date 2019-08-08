import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EventCard from "../EventCard";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
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
          <div>
            {showAllEvents ? (
              <div className={classes.ButtonWrapper}>
                <Button
                  className={classes.AttendingEventsButton}
                  variant="contained"
                  onClick={() => {
                    this.showAllEvents();
                  }}
                >
                  Events I'm Attending
                </Button>
                <Typography className={classes.AllEventsTitle} component="h2">
                  All Events
                </Typography>
              </div>
            ) : (
              <div className={classes.ButtonWrapperToggled}>
                <Button
                  className={classes.AllEventsButton}
                  variant="contained"
                  onClick={() => {
                    this.showAllEvents();
                  }}
                >
                  All Events
                </Button>
                <Typography
                  className={classes.AttendingEventsTitle}
                  component="h2"
                >
                  Events I'm Attending
                </Typography>
              </div>
            )}
          </div>
        )}

        {showAllEvents ? (
          <div>
            <Grid item xs={12}>
              {events &&
                events.map(event => (
                  <EventCard key={event._id} event={event} />
                ))}
            </Grid>
          </div>
        ) : (
          <div>
            <Grid
              container
              direction="row"
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
