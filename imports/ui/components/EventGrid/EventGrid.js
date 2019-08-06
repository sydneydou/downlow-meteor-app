import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountForm from "../AccountForm";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import EventCard from "../EventCard";

const EventGrid = ({ classes }) => {
  return (
    <Grid container>
      <Grid item xs={12} justify="center" spacing={5}>
        {/* {items.map(item => ( */}
        <div>
          <EventCard />
        </div>
        {/* ))} */}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(EventGrid);
