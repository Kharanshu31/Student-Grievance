import React, { Component } from 'react'
import "./Home.css";
import Navigationbar from "./Navigationbar";
import backgroundImg from "../AP.svg";


export default class Home extends Component {
    render() {
        return (
            <section style={{minHeight: "100vh"}}>
             <Navigationbar/>
             <div className="Home">

            
            <div className="Home-svg">
                <img src={backgroundImg} alt=""/>
            </div>
            <div className="Home-desc">
                <h1 className="Home-title">Students Grievance Redressal Portal</h1>
                <p className="Home-info">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

            </div>
                
            </div>
                
            </section>

        )
    }
}
