
import React, { Component } from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; 
import ErrorIcon from '@material-ui/icons/Error';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './Card'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const style = {
    Card : {
        display : "flex",
        justifyContent : "center"
    }
}

// import "../css/Card.css"
export default function Cardblock() {
    const classes = useStyles();

    
        return (
            <div className={classes.root}>
            <Grid container spacing={3} md style={style.Card}>
                
                <Grid item md={4} style={style.Card} >

                    <ImgMediaCard 
                        
                        color1="#55BEEA" 
                        color2="#1B8DBC" 
                        icon={<MailIcon style={{fontSize:"64px", marginLeft: "100px", color:"#1B8DBC" , paddingTop: "5px"}}/>
                        } 
                        type="Total Complaints"
                    />
                </Grid>
                <Grid item md={4} style={style.Card}>
                    <ImgMediaCard 
                        color1="#81D75D" 
                        color2="#58C42C" 
                        icon={<AssignmentTurnedInIcon style={{fontSize:"64px", marginLeft: "100px", color:"#58C42C" , paddingTop: "5px"}}/>
                        } 
                        type="Completed"
                    />   
                </Grid>
                <Grid item md={4} style={style.Card}>
                    <ImgMediaCard 
                        color1="#F05E5F" 
                        color2="#C63F40" 
                        icon={<ErrorIcon style={{fontSize: "64px",marginLeft: "100px", color:"#C63F40", paddingTop: "5px"}}/>
                        } 
                        type="Pending"
                    />
                </Grid>
            </Grid>
      </div>
        )
    
}

 