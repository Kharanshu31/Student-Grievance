import Home from "./Home";
// import Login from "./Login";
// import Register from "./Register";
import React, { useState } from 'react';
import HowItWorks from './HowItWorks';
import ContactUs from './ContactUs'
import Navigationbar from "./Navigationbar";


function App() {
  
  return (
    <div>
    <Navigationbar />
    <Home/>
      <HowItWorks />
      <ContactUs />

    </div>
  );
}

export default App;
