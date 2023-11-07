// Nav.js
// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavModule.css';

export default function Nav() {
  

  return (
    <div className='nav'>
      <nav className="navbar">
        
        
        <ul className="nav-links" >
          <li><Link to="/CourseHome">Course</Link></li>
          <li><Link to="/Quiz">Assignments/Quiz</Link></li>
          <li><Link to="/LogIn">Login</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
        </ul>
       
      </nav>
    </div>
  );
}
