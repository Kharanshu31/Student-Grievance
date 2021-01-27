import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Page404 from "./Page404";
import React, { useEffect } from "react";
import Navigationbar from "./Navigationbar";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./ResponsiveDrawer";
// redux

import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "../actions/auth";
import Form from "./Form";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App(props) {
  // component did mount
  useEffect(() => {
    props.dispatch(loadUser());
  }, []);


  return (
    <Router>
      <div>
        
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={ResponsiveDrawer} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
