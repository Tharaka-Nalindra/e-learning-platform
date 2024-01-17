import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './MediaPage.css'; 
import MediaScreen from "../images/Media Screen.png";
import { Link } from 'react-router-dom';

const MediaPage = () => {
  

  return (
    <div className="media-page">
      {/* <h1>Media Page</h1> */}
      <Link to="/VideoPage"><img src={MediaScreen} alt="statistic"/></Link>

      
    </div>
  );
};

export default MediaPage;
