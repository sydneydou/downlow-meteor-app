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
    this.state = {
      toggleButtonClick: true
    };
  }

  addUserReservation = entireEvent => {
    const eventId = entireEvent._id;
    Meteor.call("events.addUserReservation", eventId, Meteor.userId());
    this.setState({
      toggleButtonClick: false
    });
  };

  removeUserReservation = entireEvent => {
    const eventId = entireEvent._id;
    Meteor.call("events.removeUserReservation", eventId, Meteor.userId());
    this.setState({
      toggleButtonClick: true
    });
  };

  deleteUserEvent = eventId => {
    Meteor.call("events.deleteUserEvent", eventId);
  };
  render() {
    const { toggleButtonClick } = this.state;
    const { event, classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <div
                className={classes.cardInfoContent}
                
              >
                <img src={event.imageurl} className = {classes.eventImage}/>
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
                  toggleButtonClick ? (
                    <Button
                      variant="contained"
                      className={classes.btn}
                      onClick={() => this.addUserReservation(event)}
                    >
                      Count Me In!
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      className={classes.btnClicked}
                      onClick={() => this.removeUserReservation(event)}
                    >
                      Count Me Out!
                    </Button>
                  )
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
