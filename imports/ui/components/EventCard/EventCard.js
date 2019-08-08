import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

class EventCard extends Component {
  addUserReservation = eventId => {
    Meteor.call("events.addUserReservation", eventId, Meteor.userId());
  };

  deleteUserEvent = eventId => {
    Meteor.call("events.deleteUserEvent", eventId);
  };
  render() {
    const { event, classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent className={classes.cardInfoContent}>
              <div>
                <h1>{event.title}</h1>
                <h2>{event.artist}</h2>
                <h2>{event.eventDescription}</h2>
                <h2>{event.date}</h2>
                <h3>{event.genre}</h3>
                <h3>
                  There will be {event.reserved.length} users attending this
                  event!
                </h3>
                {Meteor.userId() === event.createdBy ? (
                  <DeleteOutlinedIcon
                    onClick={() => this.deleteUserEvent(event._id)}
                  />
                ) : null}
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
//subscribe to event

export default withStyles(styles)(EventCard);
