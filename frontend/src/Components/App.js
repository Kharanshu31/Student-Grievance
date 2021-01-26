import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Page404 from "./Page404";
import React, { useEffect } from "react";
import Navigationbar from "./Navigationbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./ResponsiveDrawer";
// redux
import { Provider } from "react-redux";
import store from "../store";
import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "../actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  // component did mount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    // <Provider store={store}>
    //   <Router>
    //     <div>
    //       <Navigationbar />
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route path="/login" component={Login} />
    //         <Route path="/register" component={Register} />
    //         <Route component={Page404} />
    //       </Switch>
    //     </div>
    //   </Router>
    // </Provider>
    <ResponsiveDrawer/>
  );
}

export default App;
