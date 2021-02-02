import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Form from './Form'
import Form2 from './Form2'
 
const styles = {
    root : {
        display: 'inline-block',
        position: 'absolute',
        top: '10vh',
        left: '22%',
        width: '78%'
    }
}

class SubmitNewComplaint extends Component {
    render() {
        const {classes} = this.props
        return (

        <div className={classes.root}>
        <Typography style={{ display:"flex", justifyContent:"center"}}>
            <h1>New Complaint</h1>
        </Typography>
        
        <Divider style={{ margin:"20px" }}/>
        <Form2/>
        
        <Divider style={{ margin:"20px" }}/>
                
            </div>
        )
    }
}

export default withStyles(styles)(SubmitNewComplaint)