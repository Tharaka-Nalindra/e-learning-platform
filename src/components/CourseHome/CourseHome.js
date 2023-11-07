import React from "react";
import './CourseHomeModule.css'
import ScondNav from "../SecondNav/SecondNav";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import webImg from '../../components/images/course home/image_5.png';
import beginneruideImg from '../../components/images/course home/image_001.png';
import psycholoy from '../../components/images/course home/image_003.png';
import uiUx from '../../components/images/course home/image_004.png';
import profile1 from '../../components/images/profile-picture 1.png';
import star from '../../components/images/course home/star.png';
import {BsSearch} from "react-icons/bs";

const CourseHome = () => {


    return (
      <div>
        <div className='ScondNav'><ScondNav/></div>
       

        <div className="Course-top">  
          <div className="search">
            <div className="searchInput">
              <input type="text" placeholder="" />
              <div className="searchIcon"><BsSearch/></div>
            </div>
          </div>

          <div className="topText">
            <p>Explore a vast library of courses, each crafted to engage, inspire, and challenge you. From interactive lessons and multimedia content to real-time collaboration, your path to success starts here.</p>
          </div>

        </div>

        <div className="bot">
          
          <div className="arrivals">New Arrivals</div>
          <duv className="cards">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={webImg}/>
            <Card.Body>
              <Card.Title className="cName">Complete Guide to Web Developmentk<div className="value">150$</div></Card.Title>
              <Card.Title className="cTime">5 hrs/5 video</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <div className="lecture">
                <div className="lecProfile">
                  <Card.Img  src={profile1}/>
                  
                </div>
                <div className="Name">John Rick</div>
                <div className="Points">
                <Card.Img  src={star}/>
                {' '} 4.6
                </div>

                
              </div>
              
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={beginneruideImg}/>
            <Card.Body>
              <Card.Title className="cName">Beginner Guide to <br/>Sewing<div className="values">30$</div></Card.Title>
              <Card.Title className="cTime">2 hrs/3 video</Card.Title>
              <Card.Text>
              
              </Card.Text>
              

              <div className="lecture">
                <div className="lecProfile">
                  <Card.Img  src={profile1}/>
                  
                </div>
                <div className="Name">Kylie Hudson</div>
                <div className="Points">
                <Card.Img  src={star}/>
                {' '} 4.6
                </div>

                
              </div>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={psycholoy}/>
            <Card.Body>
              <Card.Title className="cName">Introduction to Psychology<div className="value">100$</div></Card.Title>
              <Card.Title className="cTime">15 hrs/10 video</Card.Title>
              <Card.Text>
              
              </Card.Text>
              <div className="lecture">
                <div className="lecProfile">
                  <Card.Img  src={profile1}/>
                  
                </div>
                <div className="Name">Arshad Mohamad</div>
                <div className="Points">
                <Card.Img  src={star}/>
                {' '} 4.6
                </div>

                
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={uiUx}/>
            <Card.Body>
              <Card.Title className="cName">Complete Guide to UI/UX Designing<div className="value">200$</div></Card.Title>
              <Card.Title className="cTime">20 hrs/10 video</Card.Title>
              <Card.Text>
              
              </Card.Text>

              <div className="lecture">
                <div className="lecProfile">
                  <Card.Img  src={profile1}/>
                  
                </div>
                <div className="Name">John Rick</div>
                <div className="Points">
                <Card.Img  src={star}/>
                {' '} 4.6
                </div>

                
              </div>
            </Card.Body>
          </Card>

          </duv>

        </div>
      </div>
    );
  };
  
  export default CourseHome;