// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SecondNavModule.css';

export default function Nav() {
  

  return (
    <div className='nav'>
      <nav className="navbar">
        
        
        <ul className="nav-links" >
          <li><Link to="/Courses">Courses</Link></li>
          <li><Link to="/Quiz">Assignments/Quiz</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Setting">Login</Link></li>
        </ul>
        
       
      </nav>
      
    </div>
  );
}
