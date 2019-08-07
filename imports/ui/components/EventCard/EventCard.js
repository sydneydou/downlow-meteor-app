import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const EventCard = ({ event, classes }) => {
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
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withStyles(styles)(EventCard);
