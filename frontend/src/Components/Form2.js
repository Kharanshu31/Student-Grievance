import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import { postcomplaint } from '../actions/complaint';
import { connect } from 'react-redux';

const Departments = [
    'Admin', 'Admission', 'Fee', 'Accomodation'
];

const Priorities = [
    'Urgent', 'High', 'Medium', 'Low'
];

const styles = {
    root : {
        width: '50%',
        gridGap: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        justifySelf: 'center',
        marginLeft: '10%',
        '& .MuiOutlinedInput-root' : {
            width : '60%',
           
        },
        '& .MuiOutlinedInput-multiline' : {
            width : '100%',
        }
        
    }

}

class Form2 extends Component {

    
          state = {
            department: '',
            priority: '',
            title: '',
            description: '',
        };
          onSubmit = (e) => {
            const { department, title, priority, description} = this.state;

            e.preventDefault();
            this.props.dispatch(
            postcomplaint({ priority, department, title, description })
            );
        };
          handleChange = (evt) => {
              console.log(evt.target.value);
            this.setState({
            [evt.target.name]: evt.target.value,
            });
        };

render() {
        const {classes} = this.props
            const submitButtonClickHandler = () => {
      window.location.href = 'http://localhost:3000/dashboard';
    };
        return (

     
                <form
                    className={classes.root}
                    noValidate
                    autoComplete='off'
                    onSubmit={(e) => this.onSubmit(e)}
            >
                 <TextField
                    id="outlined-select"
                    select
                    label="Department"
                    defaultValue="Default Value"
                    color='secondary'
                    variant="outlined"
                    onChange={this.handleChange}
                    value={this.state.department}
                    name='department'
                    
                 >{
                    Departments.map((department) => (
                    <MenuItem key={department} value={department}>
                    {department}
                    </MenuItem>
                 ))}

                </TextField>

                <TextField
                    id="outlined-select"
                    select
                    label="Priority"
                    color={'secondary'}
                    defaultValue="Default Value"
                    variant="outlined"
                    onChange={this.handleChange}
                    value={this.state.priority}
                    name='priority'
                 >{
                    Priorities.map((priority) => (
                    <MenuItem key={priority} value={priority}>
                    {priority}
                    </MenuItem>
                 ))}
                </TextField>
                 <TextField
                id="outlined-multiline-static"
                label="Title"
               color='secondary'
                onChange={this.handleChange}
              value={this.state.title}
              name='title'
                variant="outlined"
                />
              
                <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                onChange={this.handleChange}
              value={this.state.description}
              name='description'
                rows={6}
                color='secondary'
                variant="outlined"
                />
                <div>
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              className={classes.button}
              endIcon={<SendIcon />}
            //   onClick={submitButtonClickHandler}
            >
              Submit
            </Button>
            </div>
            </form>
        
        )
    }
}

export default connect()(withStyles(styles, { withTheme: true })(Form2));