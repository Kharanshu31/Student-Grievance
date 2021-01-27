import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Dashboard from "./Dashboard"
import useStyles from './ResponiveDrawerStyles'
import TopBarAndDrawer from './TopBarAndDrawer'

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
    <TopBarAndDrawer/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
  
          {/* main body for content  below */}
          <Dashboard/>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
