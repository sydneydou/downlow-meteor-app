import React, { Component } from "react";
import ProfileCard from "../../components/ProfileCard";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import styles from "./styles";
import EventGrid from "../../components/EventGrid";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEvents: null
    };
  }

  componentDidMount() {
    Meteor.call("events.usersEvents", Meteor.userId(), (error, result) => {
      console.log(">>");
      console.log(result);
      this.setState({ userEvents: result });
    });
  }

  render() {
    const { currentUser, classes } = this.props;
    //only display users created events on this page
    return (
      <div>
        <ProfileCard currentUser={currentUser} />
        <EventGrid events={this.state.userEvents} />
        {/* <h1>events this user has created goes here!!</h1> */}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(ProfilePage);
