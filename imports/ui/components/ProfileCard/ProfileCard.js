import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Gravatar from "react-gravatar";
import PropTypes from 'prop-types';


const ProfileCard = ({ currentUser, classes }) => {
  console.log(currentUser)
  return (
    <div className={classes.profileCard}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Gravatar email={currentUser.emails[0].address} />
            <h1>{currentUser.username}</h1>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

ProfileCard.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    emails: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired
  }),
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileCard);
