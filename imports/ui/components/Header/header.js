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

// import Box from "@material-ui/core/Box";
// import { flexbox } from '@material-ui/system';
// import { NavLinks } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <p>DownLow</p>
        <p>Add Event</p>
        <LongMenu />

        <p>
          <a>Notifications</a>
        </p>
      </div>
    );
  }
}

// const options = ["Profile", "Log Out"];

const ITEM_HEIGHT = 48;

function LongMenu() {
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
        <MenuItem onClick={handleClose}>
          <Link to="/profile">
            <span>Profile</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={logout}>
          <span>Logout</span>
        </MenuItem>
        {/* {options.map(option => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}

export default withStyles(styles)(Header);
