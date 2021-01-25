import React, { Component } from 'react'
import CardBlock from "./CardBlock"
import "../css/Card.css"
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default class Dashboard extends Component {
    render() {
        return (
            <>
        <Typography style={{ display:"flex", justifyContent:"center"}}>
            <h1 >Dashboard</h1>
        </Typography>
        
        <Divider/>
        <div className="card"><CardBlock/></div>
        
        <Divider style={{ margin:"20px" }}/>
                
            </>
        )
    }
}
