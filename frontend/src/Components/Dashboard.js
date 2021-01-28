import React, { Component } from "react";
import CardBlock from "./Cardblock.js";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

class Dashboard extends Component {
  render() {
    // console.log("auth", this.props.isAuthenticated);

    return (
      <>
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          <h1>Dashboard</h1>
        </Typography>

        <Divider style={{ margin: "20px" }} />
        <div id="card">
          <CardBlock />
        </div>
        <Divider style={{ margin: "20px" }} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Dashboard);
// style={{border:"none", display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#fafafa"}}
