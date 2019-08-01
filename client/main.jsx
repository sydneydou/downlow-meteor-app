import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/App/App.jsx";
//  import AppRoutes from "../imports/ui/routes";

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
