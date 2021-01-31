import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Page404 from "./Page404";
import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// redux
import { connect } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "../actions/auth";
import SubmitNewComplaint from "./SubmitNewComplaint";
import TopBarAndDrawer from "./TopBarAndDrawer";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const PrivateRoute = (privateRouteProps) => {
  console.log("privateRouteProps", privateRouteProps);
  const { isAuthenticated, component: Component, path } = privateRouteProps;

  const [isLoggedIn, setLogIn] = useState(false);

  // useEffect(() => {
  //   if(isAuthenticated){

  //   }
  // })

  return (
    <Route
      path={path}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

function App(props) {
  // component did mount

  useEffect(() => {
    //console.log(props.auth.isAuthenticated);
    props.dispatch(loadUser());
  }, []);

  const { isAuthenticated } = props.auth;
  console.log(isAuthenticated);
  return (
    <Router>
      <div>
        {isAuthenticated ? <TopBarAndDrawer /> : <Navigationbar />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          {props.auth.isAuthenticated === null ? null : (
            <PrivateRoute
              path="/submit"
              component={SubmitNewComplaint}
              isAuthenticated={props.auth.isAuthenticated}
            />
          )}
          {props.auth.isAuthenticated === null ? null : (
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              isAuthenticated={props.auth.isAuthenticated}
            />
          )}
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
