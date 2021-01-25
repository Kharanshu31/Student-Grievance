import React, { Component } from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; 
import ErrorIcon from '@material-ui/icons/Error';
import MailIcon from '@material-ui/icons/Mail';
import ImgMediaCard from './Card'
import "../css/Card.css"
export default class CardBlock extends Component {
    render() {
        return (
            <>
        <ImgMediaCard 
                        
                        color1="#55BEEA" 
                        color2="#1B8DBC" 
                        icon={<MailIcon style={{fontSize:"64px", marginLeft: "100px", color:"#1B8DBC" , paddingTop: "5px"}}/>
                        } 
                        type="Total Complaints"
                    />
                    <ImgMediaCard 
                        color1="#81D75D" 
                        color2="#58C42C" 
                        icon={<AssignmentTurnedInIcon style={{fontSize:"64px", marginLeft: "100px", color:"#58C42C" , paddingTop: "5px"}}/>
                        } 
                        type="Completed"
                    />   
                    <ImgMediaCard 
                        color1="#F05E5F" 
                        color2="#C63F40" 
                        icon={<ErrorIcon style={{fontSize: "64px",marginLeft: "100px", color:"#C63F40", paddingTop: "5px"}}/>
                        } 
                        type="Pending"
                    />
                    </>
        )
    }
}
