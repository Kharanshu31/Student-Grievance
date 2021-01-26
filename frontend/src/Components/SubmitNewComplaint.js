import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Form from './Form'

export default class Dashboard extends Component {
    render() {
        return (

        <>
        <Typography style={{ display:"flex", justifyContent:"center"}}>
            <h1>New Complaint</h1>
        </Typography>
        
        <Divider style={{ margin:"20px" }}/>
        <Form/>
        
        <Divider style={{ margin:"20px" }}/>
                
            </>
        )
    }
}
