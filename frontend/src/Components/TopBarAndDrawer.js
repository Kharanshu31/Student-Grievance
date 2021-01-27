import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; 
import ErrorIcon from '@material-ui/icons/Error';
import HomeIcon from '@material-ui/icons/Home';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import useStyles from './ResponiveDrawerStyles'


export default function TopBarAndDrawer(props) {
    const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    const drawer = (
    <div>
    
      <div className={classes.toolbar} />
      <Divider />
      <h1 style={{marginLeft: "20px", fontSize: "36px", fontWeight:"200"}}>Rahul Kaushik</h1>
      <h2 style={{marginLeft: "20px", fontSize: "18px", fontWeight:"bold"}}>User</h2>
      <Divider />
      <List>
        {['Dashboard', 'Submit New Complaint', 'Report'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <HomeIcon/> : index === 1 ? <MailIcon/> : <InsertChartIcon/>}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Completed', 'Pending'].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AssignmentTurnedInIcon style={{color:"green"}}/> : <ErrorIcon style={{color:"red"}} />}</ListItemIcon>
            <ListItemText primary={`${text} : ${0}`}/>
          </ListItem>
        ))}
      </List>
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
        <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar style={
            {
                backgroundColor:'black',
                display:'flex',
                justifyContent:'space-between'

            }
        }>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Grievance Portal
          </Typography>
   

       
          <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<ExitToAppIcon />}
      >
        Sign Out
      </Button>
        </Toolbar>

    </AppBar>
    
      <nav className={classes.drawer} aria-label="mailbox folders" >
        <Hidden smUp implementation="css">
          <Drawer

            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
    )
}
