
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import React, { Component } from 'react'

const styles = (theme) => ({
  root: {
      
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  formDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
  },
  button: {
    margin: theme.spacing(1),
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e83e8c'
    }
  }
});



class Form extends Component {
  
  state = {
      university: "", 
      college: "", 
      department: "",
      title: "", 
      complaint: ""
  };

  handleChange = (evt) => {
      console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render () {
      const { classes } = this.props;

  return (

      <MuiThemeProvider theme={theme} >
    <form className={classes.root} noValidate autoComplete="off" >
    
      <div className={classes.formDiv} >
      <div >
        <TextField id="outlined-basic" label="University" variant="outlined" onChange={this.handleChange} value={this.state.university} name='university'/>
        <TextField id="outlined-basic" label="College" variant="outlined" onChange={this.handleChange} value={this.state.colleges} name='college'/>
      </div>
      
      <TextField id="outlined-basic" label="Department" variant="outlined" onChange={this.handleChange} value={this.state.department} name='department'/>


        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={this.handleChange} value={this.state.title} name='title'/>
        <TextField
          id="outlined-multiline-static"
          onChange={this.handleChange} value={this.state.complaint}
          label="Complaint"
          name='complaint'
          multiline
          rows={7}
          style = {{
              width: "50%",
          }}
        //   defaultValue="Default Value"
          variant="outlined"
        />
    
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >Submit</Button>
      
      </div>
      
    </form>
    </MuiThemeProvider>
  )
        }
}

export default withStyles(styles, { withTheme: true })(Form);