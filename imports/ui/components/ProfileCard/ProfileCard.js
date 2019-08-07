import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Gravatar from "react-gravatar";

const ProfileCard = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div>
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

export default ProfileCard;
