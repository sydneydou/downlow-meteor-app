import React from "react";
import AppRoutes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
