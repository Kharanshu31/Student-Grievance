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
import ResponsiveDrawer from "./ResponsiveDrawer";
// redux
import { connect } from "react-redux";
import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "../actions/auth";
import Form from "./Form";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const PrivateRoute = (privateRouteProps) => {
  console.log("privateRouteProps" , privateRouteProps) ;
  const { isAuthenticated, component: Component, path } = privateRouteProps;

  const [isLoggedIn , setLogIn] = useState(false) ;

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
  },[props.auth.isAuthenticated]);

  const { isAuthenticated } = props.auth;
  console.log(isAuthenticated) ;
  return (
    <Router>
      <div>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={ResponsiveDrawer} />
          {/* <Route path="/submit" component={Form} /> */}
          {props.auth.isAuthenticated===null ? (
            null
          ) : (
            <PrivateRoute
              path="/submit"
              component={Form}
              isAuthenticated={props.auth.isAuthenticated}
            />
          ) }
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
