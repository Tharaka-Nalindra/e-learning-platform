import React from "react";
// import { useHistory } from "react-router-dom";
import './SignUpModule.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import SignUpNav from "../SignUpNav/SignUpNav";
import imgOne from "../images/image 5.png";

const SignUp = () => {

  return (
    <div>
      <div className='SignUpNav'><SignUpNav/></div>
      <div className="SignUpPag">
        <div className="SignUpformBody">
          <div className="formBody">
            <Form>
              <h2>SignUp</h2>
              <p className="alrady">Already have an account? <Link to="/LogIn">Login</Link> here.</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password"/>
              </Form.Group>
              <p className="bottomP">By creating an account, you agree to our <Link to="/LogIn">terms and conditions</Link></p>
              <Button variant="" type="button" className="SignUp-custom-button">
                <Link to={"/LogIn"}>SignUp</Link>
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
