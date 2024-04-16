import React, { Fragment } from "react";
import Home from "./Home";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routing />
      </Router>
    </React.Fragment>
  );
};

const Routing = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
