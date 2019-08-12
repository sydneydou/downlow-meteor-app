import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import ProfileIcon from "@material-ui/icons/PersonOutline";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Link to="/home" className={classes.Link}>
          <p className={classes.HeaderText}>DownLow</p>
        </Link>

        <Link to="/create" className={classes.Link}>
          <AddCircleOutline className={classes.AddIcon} />
          <p className={classes.HeaderText}>Add Event</p>
        </Link>

        <div className={classes.LongIconContainer}>
          <LongMenu classes={classes} />
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
        className={classes.VertIcon}
      >
        <MoreVertIcon className={classes.DropDown} />
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
          <span>
            <ProfileIcon className={classes.InnerIcons} />
            Profile
          </span>
        </MenuItem>
        <MenuItem onClick={logout} className={classes["long-menu-item"]}>
          <span>
            <LogoutIcon className={classes.InnerIcons} />
            Logout
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
