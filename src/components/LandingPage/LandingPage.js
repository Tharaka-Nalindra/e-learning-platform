import React from "react";
// import { useNavigate } from "react-router-dom";
import './LandingPageModule.css';
// import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
// import { auth } from "../../firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import LandingNav from "../LandingNav/LandingNav";
import imgOne from "../images/image 5.png";
import { Link } from "react-router-dom";


const LandingPage = () => {


  return (
    <div>
      <div className='nav'><LandingNav/></div>
      <div className="LandingPage">
      
        <div className="LandingPage_text_body">
            <div className="toptxt">
            <p>E learning <br/>Platform</p>
          </div>

          <div className="middliText">
            <p>Your Gateway to Learning Excellence</p>
          </div>

            

          <div className="bottomText"><p>Are you ready to embark on a journey of <br/>knowledge, growth, and achievement?<br/> 
              Look no further! Welcome where education<br/> meets innovation, and learning knows 
              <br/>no boundaries.</p>
          </div>

          <div className="GetStart">
            <Button  variant="" type="button" className="GetStart-button">
              <Link to={"/SignUp"}>Get Started</Link>
            </Button>
          </div>

        </div>

        <div className="landingimgOne"><img src={imgOne} alt="imag 5"/></div>

      </div>
    </div>
  );
};

export default LandingPage;
