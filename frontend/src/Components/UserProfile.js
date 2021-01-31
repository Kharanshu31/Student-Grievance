import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import "../css/UserProfile.css";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    
    justifyContent: 'center',
    display: 'inline-block',
    position: 'absolute',
    top: '10vh',
    right: '0%',
    width: '80%',
  },
  // '@media screen and (max-width: 600px)': {
  //   root: {
      
  //     justifyContent: 'center',
  //     left: '10%',
  //     alignItem : 'center', 
  //     width: "100%",
  //   },
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
      
    },
  },

});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e83e8c'
    }
  }
});

class UserProfile extends Component {
  
      state = {
      university: "Delhi University", 
      college: "Netaji Subash University of Technology", 
      firstName: "Rahul",
      lastName: "Kaushik", 
      phoneNo: "9811165678",
      age:"21",
      graduatingYear:"2023",
      isEditing: false
  };

   handleChange = (evt) => {
      console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleEditing = ()=> {
      this.setState ({isEditing:true})
  }

  handleSave = ()=> {
      this.setState ({isEditing:false})
  }

  render () {
    const { classes } = this.props;
  return (
    <MuiThemeProvider theme={theme} >
        <div className={classes.root}>
                <h1 style={{textAlign:'center'}}>User Profile</h1>

        <Divider style={{margin: '20px'}}/>

        <div className='fab'>

        <Fab color="secondary" aria-label="edit" onClick={this.handleEditing}>
            <EditIcon />
        </Fab>

        </div>
            <form className={classes.form} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={12} lg={6}>
          
                <TextField
                id="outlined-read-only-input"
                label="First Name"
                disabled = {!this.state.isEditing}
               
                variant="outlined"
                onChange={this.handleChange} value={this.state.firstName} name='firstName'
            />
        </Grid>
           <Grid item md={12} lg={6}>
          
            <TextField
                id="outlined-read-only-input"
                label="Last Name"
                disabled = {!this.state.isEditing}
                variant="outlined"
                onChange={this.handleChange} value={this.state.lastName} name='lastName'
            />
        </Grid>
        <Grid item md={12} lg={6} >
            <TextField
                
                id="outlined-read-only-input"
                label="Email"
                // from data base
                defaultValue="rahulkaushik228646@gmail.com"
                disabled = 'true'
                variant="outlined"
            />
          
        </Grid>
        <Grid item md={12} lg={6}>
            <TextField
                
                id="outlined-read-only-input"
                label="Phone Number"
                disabled = {!this.state.isEditing}
                variant="outlined"
                onChange={this.handleChange} value={this.state.phoneNo} name='phoneNo'
            />
        </Grid>
        <Grid item md={12} lg={6}>
            <TextField
                
                id="outlined-read-only-input"
                label="University"
                disabled = {!this.state.isEditing}
                variant="outlined"
                onChange={this.handleChange} value={this.state.university} name='university'
            />
        </Grid>
        <Grid item md={12} lg={6}>
            <TextField
                
                id="outlined-read-only-input"
                label="College"
               disabled = {!this.state.isEditing}
                variant="outlined"
                onChange={this.handleChange} value={this.state.college} name='college'
            />
        </Grid>
         <Grid item md={12} lg={6}>
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
         disabled = {!this.state.isEditing}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={this.handleChange} value={this.state.age} name='age'
        />
        </Grid>
         <Grid item md={12} lg={6}>
            <TextField
                id="outlined-number"
                label="Graduating Year"
                type="number"
                defaultValue={2021}
                disabled = {!this.state.isEditing}
                InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            onChange={this.handleChange} value={this.state.graduatingYear} name='graduatingYear'
            />
        </Grid>


         <Grid item xs={12}>
               <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={this.handleSave}
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
        </Grid>
         </Grid>
        </form>
    </div>
       
    </MuiThemeProvider>
  );
    }
}


export default connect()(withStyles(styles, { withTheme: true })(UserProfile));