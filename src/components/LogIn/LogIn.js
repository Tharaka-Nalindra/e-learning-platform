import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './LogInModule.css';
// import pagecar from "../image/pagecar.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { auth } from "../../firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpNav from "../SignUpNav/SignUpNav";
import imgOne from "../images/image 5.png";
import axios from "axios";


const Login = () => {


  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email,password})
    .then(result => {
      console.log(result)
      if(result.data === "success"){
        navigate('/Dashboard')
      } else{
        alert("The Password is Incorrect")
    }
    
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <div className='SignUpNav'><SignUpNav/></div>
      <div className="LogInPag">
      
        <div className="LohInformBody">
          
          <div className="formBody">
            <Form onSubmit={handleSubmit}>
            <h2>LogIn</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Control type="email" placeholder="email"/> */}
                <input type="email" placeholder="Email" name="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Control type="password" placeholder="Password"/> */}
                <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
 
              
              <Button  variant="" type="submit" className="LogIn-custom-button">
                LogIn
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

export default Login;
