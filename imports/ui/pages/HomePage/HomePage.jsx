import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

HomePage = () => {
  //might have to make seperate HomeBanner component in order to pass currentUser
  const currentUser = this.props;
  console.log({ currentUser });
  return (
    <div>
      <h1>Welcome to DownLow!</h1>
    </div>
  );
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(HomePage);
