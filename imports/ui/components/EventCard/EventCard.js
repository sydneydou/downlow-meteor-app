import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Meteor } from "meteor/meteor";

const EventCard = ({ event, classes }) => {
  addUserReservation = () => {
    event.reserved.push(Meteor.userId());
  };

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
                <Button variant="contained" onClick={this.addUserReservation}>
                  Count Me In!
                </Button>
              ) : null}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withStyles(styles)(EventCard);
