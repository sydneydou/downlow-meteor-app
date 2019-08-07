import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";

class EventCard extends Component {
  addUserReservation = eventId => {
    Meteor.call("events.addUserReservation", eventId, Meteor.userId());
  };

  render() {
    const { event, classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <div>
                <h1>{event.title}</h1>
                <h2>{event.artist}</h2>
                <h2>{event.eventDescription}</h2>
                <h2>{event.date}</h2>
                <h3>{event.genre}</h3>
                {Meteor.userId() !== event.createdBy ? (
                  <Button
                    variant="contained"
                    onClick={() => this.addUserReservation(event._id)}
                  >
                    Count Me In!
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(EventCard);
