import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import Button from "@material-ui/core/Button";
//popper for notification
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
// end of popper

// import Box from "@material-ui/core/Box";
// import { flexbox } from '@material-ui/system';
// import { NavLinks } from "react-router-dom";

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Link to="/home">
          <p>DownLow</p>
        </Link>
        <Link to="/create">
          <p>Add Event</p>
        </Link>
        <div className={classes.notificationsContainer}>
          <LongMenu classes={classes} className={classes.LongMenu} />
          <SimplePopper />
        </div>
      </div>
    );
  }
}

const ITEM_HEIGHT = 48;

function LongMenu({ classes }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function logout() {
    console.log("trying to logout");
    console.log(Meteor.userId());
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        console.log("ERROR: " + error.reason);
      }
    });
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem
          component={Link}
          to="/profile"
          className={classes["long-menu-item"]}
        >
          <span>Profile</span>
        </MenuItem>
        <MenuItem onClick={logout} className={classes["long-menu-item"]}>
          <span>Logout</span>
        </MenuItem>
      </Menu>
    </div>
  );
}

function SimplePopper() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <NotificationsActive />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>(x) amount of Users RSVP'd</Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default withStyles(styles)(Header);
