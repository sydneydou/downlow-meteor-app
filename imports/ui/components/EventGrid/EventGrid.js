import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EventCard from "../EventCard";

const EventGrid = ({ classes, events }) => {
  return (
    <Grid container direction="row" justify="space-between" spacing={5}>
      {events && events.map(event => <EventCard event={event} />)}
    </Grid>
  );
};

export default withStyles(styles)(EventGrid);
