import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EventCard from "../EventCard";

const EventGrid = ({ classes, events }) => {
  return (
    <Grid container justify="space-between" spacing={5}>
      <Grid>
        {events.map(event => (
          <div>
            <EventCard event={event} />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(EventGrid);
