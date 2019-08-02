import React, { Component } from "react";
import { NavLinks } from "react-router-dom";
import styles from "./styles"

class Header extends Component {
  render() {
    return (
      <div>
        <p>DownLow</p>
        <p>Add Event</p>
        <a>Links</a>
        <a>Notifications</a>
      </div>
    );
  }
}

export default Header;
