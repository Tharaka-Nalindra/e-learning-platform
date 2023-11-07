import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TherdNavModule.css';
import profile from '../images/nav/profile.png';

export default function TherdNav() {
  

  return (
    <div className='Thard-nav'>
      <nav className="Thard-navbar">
        
        
        <ul className="Thard-nav-links" >
          <li><Link to="/Courses">Course</Link></li>
          <li><Link to="/Quiz">Assignments/Quiz</Link></li>
          <li><Link to="/Setting">About Us</Link></li>
          {/* <li><Link to="#"><div><img src={profile} alt='profile'></img></div></Link></li> */}
        </ul>
        <img src={profile} alt='profile'></img>
       
      </nav>
      
    </div>
  );
}
