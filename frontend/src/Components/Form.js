import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const university = [
  {
    value: 'DU',
    label: 'DU',
  },
  {
    value: 'IPU',
    label: 'IPU',
  },
  {
    value: 'AKTU',
    label: 'AKTU',
  },
  {
    value: 'CU',
    label: 'CU',
  },
];

const college = [
  {
    value: 'Hansraj',
    label: 'Hansraj',
  },
  {
    value: 'Gargi',
    label: 'Gargi',
  },
  {
    value: 'MAIT',
    label: 'MAIT',
  },
  {
    value: 'ABC',
    label: 'ABC',
  },
];

const department = [
  {
    value: 'ADMISSION',
    label: 'ADMISSION',
  },
  {
    value: 'EXAM',
    label: 'EXAM',
  },
  {
    value: 'TIME TABLE',
    label: 'TIME TABLE',
  },
  {
    value: 'RE-EVALUATION',
    label: 'RE-EVALUATION',
  },
];


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
  render() {
    const { classes } = this.props;

    return (

      <MuiThemeProvider theme={theme} >
        <form className={classes.root} noValidate autoComplete="off" >

          <div className={classes.formDiv} >
            <div >
              <TextField
                id="outlined-select-currency-native"
                select
                label="UNIVERSITY"
                value={String}
                onChange={this.handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your University"
                variant="outlined"
              >
                {university.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="COLLEGE"
                value={String}
                onChange={this.handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your University"
                variant="outlined"
              >
                {college.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>

            <TextField
              id="outlined-select-currency-native"
              select
              label="DEPARTMENT"
              value={String}
              onChange={this.handleChange}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your University"
              variant="outlined"
            >
              {department.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>


            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={this.handleChange} value={this.state.title} name='title' />
            <TextField
              id="outlined-multiline-static"
              onChange={this.handleChange} value={this.state.complaint}
              label="Complaint"
              name='complaint'
              multiline
              rows={7}
              style={{
                width: "50%",
              }}
              //   defaultValue="Default Value"
              variant="outlined"
            />

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<SendIcon />}
            >Submit</Button>

          </div>

        </form>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Form);