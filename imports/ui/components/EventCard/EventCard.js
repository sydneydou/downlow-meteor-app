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
  constructor(props) {
    super(props);
  }
  addUserReservation = async entireEvent => {
    const eventId = entireEvent._id;
    await Meteor.call("events.addUserReservation", eventId, Meteor.userId());
  };
  removeUserReservation = async entireEvent => {
    const eventId = entireEvent._id;
    await Meteor.call("events.removeUserReservation", eventId, Meteor.userId());
  };

  checkForUserReservation = event => {
    return event.reserved.includes(Meteor.userId());
  };

  deleteUserEvent = eventId => {
    Meteor.call("events.deleteUserEvent", eventId);
  };
  render() {
    const { event, classes } = this.props;
    return (
      event && (
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <div className={classes.cardInfoContent}>
                  <h1 className={classes.cardTitle}>{event.title}</h1>
                  <h2 className={classes.singleContent}>{event.artist}</h2>
                  <h2 className={classes.singleContent}>
                    {event.eventDescription}
                  </h2>
                  <h2 className={classes.singleContent}>{event.date}</h2>
                  <h3 className={classes.singleContent}>{event.genre}</h3>
                  <h3 className={classes.singleContent}>
                    There will be {event.reserved.length} users attending this
                    event!
                  </h3>
                  {Meteor.userId() === event.createdBy ? (
                    <DeleteOutlinedIcon
                      onClick={() => this.deleteUserEvent(event._id)}
                    />
                  ) : null}
                  {Meteor.userId() !== event.createdBy ? (
                    // toggleButtonClick ? (
                    <Button
                      variant="contained"
                      className={
                        this.checkForUserReservation(event)
                          ? classes.btnClicked
                          : classes.btn
                      }
                      onClick={() =>
                        this.checkForUserReservation(event)
                          ? this.removeUserReservation(event)
                          : this.addUserReservation(event)
                      }
                    >
                      {this.checkForUserReservation(event)
                        ? "Count Me Out!"
                        : "Count Me In!"}
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )
    );
  }
}
//subscribe to event
export default withStyles(styles)(EventCard);
