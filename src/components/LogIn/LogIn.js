import React from "react";
// import { useNavigate } from "react-router-dom";
import './LogInModule.css';
// import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { auth } from "../../firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpNav from "../SignUpNav/SignUpNav";
import imgOne from "../images/image 5.png";


const login = () => {


  return (
    <div>
      <div className='SignUpNav'><SignUpNav/></div>
      <div className="LogInPag">
      
        <div className="LohInformBody">
          
          <div className="formBody">
            <Form>
            <h2>LogIn</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
 
              
              <Button  variant="" type="button" className="LogIn-custom-button">
                <Link to="/Dashboard" >LogIn</Link>
              </Button>
            </Form>
            <p className="bottomP">I dont have account<Link to="/SignUp"> SignUp here?</Link></p>
            </div>

        </div>

        <div className="imgOne"><img src={imgOne} alt="imag 5"/></div>

      </div>
    </div>
  );
};

export default login;
