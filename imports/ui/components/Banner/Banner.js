import React, { Component } from "react";
import styles from "./styles.js";
import { withStyles } from "@material-ui/core/styles";

const Banner = ({ classes }) => {
  return (
    <div className={classes.container}>
    <span className={classes.dL}>DL</span>
    </div>
  );
};

export default withStyles(styles)(Banner);

