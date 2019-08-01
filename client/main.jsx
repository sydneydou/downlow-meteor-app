import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App";


import React from 'react';

const App = () => {
  return (
    <div>
      
    </div>
  );
};



Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
