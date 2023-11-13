// Nav.js
// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUpNavModule.css';

export default function Nav() {
  

  return (
    <div className='Landinnav'>
      <nav className="Landinnavbar">
        
        
        <ul className="Landinnav-links" >
          <li><Link to="/">Courses</Link></li>
          <li><Link to="/">Assignments/Quiz</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/LogIn">Login</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
        </ul>
       
      </nav>
    </div>
  );
}
