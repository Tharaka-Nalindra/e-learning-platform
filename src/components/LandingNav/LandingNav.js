// Nav.js
// import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LandinNavModule.css';

export default function Nav() {
  

  return (
    <div className='Landinnav'>
      <nav className="Landinnavbar">
        
        
        <ul className="Landinnav-links" >
          <li><Link to="#">Courses</Link></li>
          <li><Link to="#">Assignments/Quiz</Link></li>
          <li><Link to="#">About Us</Link></li>
          <li><Link to="#">Login</Link></li>
          <li><Link to="#">Sign Up</Link></li>
        </ul>
       
      </nav>
    </div>
  );
}
