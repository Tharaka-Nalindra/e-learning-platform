import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import './SignUpModule.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import SignUpNav from "../SignUpNav/SignUpNav";
import imgOne from "../images/image 5.png";
import axios from 'axios'

const SignUp = () => {

  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name,email,password})
    .then(result => {console.log(result)
    navigate('/LogIn')
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <div className='SignUpNav'><SignUpNav/></div>
      <div className="SignUpPag">
        <div className="SignUpformBody">
          <div className="formBody">
            <Form onSubmit={handleSubmit}>
              <h2>SignUp</h2>
              <p className="alrady">Already have an account? <Link to="/LogIn">Login</Link> here.</p>
              <Form.Group className="mb-3" controlId="formBasicName">
                {/* <Form.Control type="text" placeholder="Name"/> */}
                <input type="text" placeholder="Name" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/> */}
                <input type="email" placeholder="Email" name="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/> */}
                <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
              
              <p className="bottomP">By creating an account, you agree to our <Link to="#">terms and conditions</Link></p>
              <Button variant="" type="submit" className="SignUp-custom-button">
                SignUp
              </Button>
            </Form>
          </div>
        </div>
        <div className="imgOne"><img src={imgOne} alt="image_5"/></div>
      </div>
    </div>
  );
};

export default SignUp;
