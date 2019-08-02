import React from "react";
import AppRoutes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <AppRoutes />
    </Router>
  </div>
);

export default App;
