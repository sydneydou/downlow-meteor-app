import React from "react";
import AppRoutes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Router>
      <AppRoutes />
    </Router>
  </div>
);

export default App;
