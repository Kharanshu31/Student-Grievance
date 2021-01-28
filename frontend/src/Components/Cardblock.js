
import React, {useState,useEffect,Component } from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ErrorIcon from '@material-ui/icons/Error';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from './Card'
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import {getcomplaint} from "../actions/complaint";

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
function Cardblock(props) {
    const classes = useStyles();

    const [pending,setPending]=useState(0);
    const [completed,setCompleted]=useState(0);
    const [load,setLoad]=useState(false)
    const [maxcount,setMaxcount]=useState(0)

    useEffect(async () => {
      await props.getcomplaint();
      //await props.getcomplaint();
      //console.log(props.complaints);
      props.complaints.map(el=>{
          //console.log(el);
          if(el.status)
          {
            setCompleted(prevstate=>prevstate+1)
          }
          else
          {
            setPending(prevstate=>prevstate+1)
          }
          //setComplaintLength(props.complaint.complaints.length)
      })

      if(props.complaints.length===0 && maxcount<=3)
      {
        setLoad(prevstate=>!prevstate)
        setMaxcount(prevstate=>prevstate+1)
      }

    },[load]);

        return (
            <div className={classes.root}>
            <Grid container spacing={3} md style={style.Card}>

                <Grid item md={4} style={style.Card} >

                    <ImgMediaCard
                        count={completed+pending}
                        color1="#55BEEA"
                        color2="#1B8DBC"
                        icon={<MailIcon style={{fontSize:"64px", marginLeft: "100px", color:"#1B8DBC" , paddingTop: "5px"}}/>
                        }
                        type="Total Complaints"
                    />
                </Grid>
                <Grid item md={4} style={style.Card}>
                    <ImgMediaCard
                        count={completed}
                        color1="#81D75D"
                        color2="#58C42C"
                        icon={<AssignmentTurnedInIcon style={{fontSize:"64px", marginLeft: "100px", color:"#58C42C" , paddingTop: "5px"}}/>
                        }
                        type="Completed"
                    />
                </Grid>
                <Grid item md={4} style={style.Card}>
                    <ImgMediaCard
                        count={pending}
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

function mapStateToProps(state) {
  return {
    complaints:state.complaint.complaints
  };
}

export default connect(mapStateToProps,{getcomplaint})(Cardblock);
