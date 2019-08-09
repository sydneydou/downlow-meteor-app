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

  filterEvents = events => {
    return events.filter(event => event.reserved.includes(Meteor.userId()));
  };

  render() {
    const { showAllEvents } = this.state;
    const { classes, events } = this.props;
    return (
      <div>
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
            <Grid item xs={12} className={classes.EventGridContainer}>
              {events &&
                events.map(event => (
                  <EventCard key={event._id} event={event} />
                ))}
            </Grid>
          </div>
        ) : (
          <div>
            <Grid
              item
              xs={12}
              className={
                this.props.location.pathname === "/home"
                  ? classes.EventGridContainer
                  : null
              }
            >
              {this.filterEvents(events).length ? (
                this.filterEvents(events).map(event => (
                  <EventCard key={event._id} event={event} />
                ))
              ) : (
                <h3 className={classes.noAttendedEventsText}>
                  You have no events you want to attend yet!
                </h3>
              )}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(EventGrid));
