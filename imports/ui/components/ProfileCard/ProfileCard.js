import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

const ProfileCard = () => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <p>This is profile card content</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProfileCard;
