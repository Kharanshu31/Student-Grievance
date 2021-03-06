import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ErrorIcon from "@material-ui/icons/Error";
import HomeIcon from "@material-ui/icons/Home";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import useStyles from "./TopBarAndDrawerStyles";
import { logout } from "../actions/auth";
import { Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { getcomplaint } from "../actions/complaint";

function TopBarAndDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [username, setUsername] = useState("Unknown");
  const [loading, setloading] = useState(true);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  // const [complaintsLength,setComplaintLength]=useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOut = () => {
    props.dispatch(logout());
  };

  const [load,setLoad]=useState(false)
  const [maxcount,setMaxcount]=useState(0)

  useEffect(async () => {
    
    await props.dispatch(getcomplaint());
    //await props.getcomplaint();
    //console.log(props.complaints);
    props.complaints.map(el=>{
        //console.log(el);
        if(el.status)
        {
          setCompleted(prevstate=>prevstate+1)
        }
        else
        {
          setPending(prevstate=>prevstate+1)
        }
        //setComplaintLength(props.complaint.complaints.length)
    })

    if(props.complaints.length===0 && maxcount<=3)
    {
      setLoad(prevstate=>!prevstate)
      setMaxcount(prevstate=>prevstate+1)
    }

  },[load]);

  useEffect(() => {
    // console.log('running');
    if (props.auth.user && props.auth.token) {
      console.log(props.auth);
      setUsername(props.auth.user.name);
      setloading(false);
    }
  }, [props.auth.user]);

  // useEffect(()=>{
  //       console.log(props.complaint.complaints);
  // },[props.complaint.complaints])

  if (!props.auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <h1 style={{ marginLeft: "20px", fontSize: "36px", fontWeight: "200" ,cursor:"pointer"}} onClick={()=>{
        props.history.push("/profile");
      }}>
        {username}
      </h1>
      <h2 style={{ marginLeft: "20px", fontSize: "18px", fontWeight: "bold" }}>
        User
      </h2>
      <Divider />
      <List>
        {["Dashboard", "Submit New Complaint", "Report"].map((text, index) => (
          <ListItem button key={text} onClick={(e)=>{
            e.preventDefault();
            if(index===0)
            {
              props.history.push("/dashboard");
            }
            if(index==1)
            {
              props.history.push("/submit");
            }
          }}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <MailIcon />
              ) : (
                <InsertChartIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* {['Completed', 'Pending'].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AssignmentTurnedInIcon style={{color:"green"}}/> : <ErrorIcon style={{color:"red"}} />}</ListItemIcon>
            <ListItemText primary={`${text} : ${0}`}/>
          </ListItem>
        ))} */}

        <ListItem key="Completed">
          <ListItemIcon>
            <AssignmentTurnedInIcon style={{ color: "green" }} />
          </ListItemIcon>
          <ListItemText primary={`Completed : ${completed}`} />
        </ListItem>

        <ListItem key="Pending">
          <ListItemIcon>
            <ErrorIcon style={{ color: "red" }} />
          </ListItemIcon>
          <ListItemText primary={`Pending : ${pending}`} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log("auth", props.auth.isAuthenticated);
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{color:"white"}}>
            Grievance Portal
          </Typography>

          <Button
            onClick={handleLogOut}
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<ExitToAppIcon />}
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

TopBarAndDrawer.propTypes = {
  auth: PropTypes.object,
  window: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    complaints: state.complaint.complaints,
  };
}

export default withRouter(connect(mapStateToProps)(TopBarAndDrawer));
