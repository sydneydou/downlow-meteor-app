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
import PropTypes from "prop-types";

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
                <div className={classes.imageCentering}>
                  <div className={classes.cardInfoContent}>
                    <span className={classes.titleTimeBlock}>
                      <h1 className={classes.cardTitle}>{event.title}</h1>
                      <h2 className={classes.cardDate}>{event.date}</h2>
                    </span>
                    <span className={classes.infoBlock}>
                      <h2 className={classes.cardArtist}>
                        <span className={classes.cardInput}>Artist: </span>
                        <span>{event.artist}</span>
                      </h2>
                      <h3 className={classes.cardArtist}>
                        <span className={classes.cardInput}>Genre: </span>
                        <span>{event.genre}</span>
                      </h3>
                    </span>
                    <h2 className={classes.singleContent}>
                      {event.description}
                    </h2>
                    <span>
                      <h3 className={classes.cardAttending}>
                        There will be{" "}
                        <span className={classes.numAttending}>
                          {event.reserved.length}
                        </span>{" "}
                        users attending this event!
                      </h3>
                    </span>
                    {Meteor.userId() === event.createdBy ? (
                      <DeleteOutlinedIcon
                        className={classes.deleteIcon}
                        onClick={() => this.deleteUserEvent(event._id)}
                      />
                    ) : null}
                    {Meteor.userId() !== event.createdBy ? (
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
                  <div className={classes.cardDiv}>
                    <img src={event.imageurl} className={classes.cardImage} />
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )
    );
  }
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

export default withStyles(styles)(EventCard);
