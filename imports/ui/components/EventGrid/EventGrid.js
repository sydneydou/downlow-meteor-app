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
    console.log(this.props);
    return (
      <div>
        {this.props.location.pathname === "/home" && (
          <Button
            variant="contained"
            onClick={() => {
              this.showAllEvents();
            }}
          >
            {showAllEvents ? "Events I'm Attending" : "All Events"}
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

export default withRouter(withStyles(styles)(EventGrid));
