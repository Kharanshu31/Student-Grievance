import React, { Component } from "react";
import CardBlock from "./Cardblock.js";
import {withStyles} from '@material-ui/styles'
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { COMPLAINTPOST_SUCCESS } from "../actions/actionTypes.js";

const styles = {
    root : {
        display: 'inline-block',
        position: 'absolute',
        top: '10vh',
        left: '22%',
        width: '78%',
    }
}
class Dashboard extends Component {
  render() {
    // console.log("auth", this.props.isAuthenticated);
    const {classes} = this.props
    return (
      <div className={classes.root}>
      <div className={COMPLAINTPOST_SUCCESS.root}>
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          <h1>Dashboard</h1>
        </Typography>

        <Divider style={{ margin: "20px" }} />
        <div id="card">
          <CardBlock />
        </div>
        <Divider style={{ margin: "20px" }} />
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withStyles(styles) (connect(mapStateToProps)(Dashboard));
// style={{border:"none", display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#fafafa"}}
