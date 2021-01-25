import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Page404 from "./Page404";
import React from "react";
import Navigationbar from "./Navigationbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from "./ResponsiveDrawer"
import Form from "./Form"

function App() {
  return (
    // <Router>
    //   <div>
    //     <Navigationbar />
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/login" component={Login} />
    //       <Route path="/register" component={Register} />
    //       <Route component={Page404} />
    //     </Switch>
    //   </div>
    // </Router>
    // <ResponsiveDrawer/> 
     <Form/>
    
  );
}

export default App;
