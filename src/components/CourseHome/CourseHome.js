import React, { useState } from "react";
import "./CourseHomeModule.css";
import ScondNav from "../SecondNav/SecondNav";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import webImg from "../../components/images/course home/image_5.png";
import beginneruideImg from "../../components/images/course home/image_001.png";
import psycholoy from "../../components/images/course home/image_003.png";
import uiUx from "../../components/images/course home/image_004.png";
import profile1 from "../../components/images/profile-picture 1.png";
import star from "../../components/images/course home/star.png";
import { BsSearch } from "react-icons/bs";

const CourseHome = () => {
  const CardData = [
    {
      img: webImg,
      cName: "Complete Guide to Web Developmentk",
      cTime: "5 hrs/5 video",
      lecProfile: profile1,
      Name: "John Rick",
      Points: "4.6",
      value:"$155"
    },
    {
      img: webImg,
      cName: "Introduction to Psychology",
      cTime: "5 hrs/5 video",
      lecProfile: profile1,
      Name: "John Rick",
      Points: "4.6",
      value:"$155"
    },
    {
      img: webImg,
      cName: "Complete Guide to UI/UX Designing",
      cTime: "5 hrs/5 video",
      lecProfile: profile1,
      Name: "John Rick",
      Points: "4.6",
      value:"$155"
    },
    {
      img: webImg,
      cName: "Beginner Guide to Sewing",
      cTime: "5 hrs/5 video",
      lecProfile: profile1,
      Name: "John Rick",
      Points: "4.6",
      value:"$155"
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="ScondNav">
        <ScondNav />
        <hr></hr>
      </div>

      <div iv className="Course-top">
        <div className="search">
          <div className="searchInput">
            <input
              type="text"
              id="searchInput"
              placeholder="search here"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div className="searchIcon">
              <BsSearch />
            </div>
          </div>
        </div>

        <div className="topText">
          <p>
            Explore a vast library of courses, each crafted to engage, inspire,
            and challenge you. From interactive lessons and multimedia content
            to real-time collaboration, your path to success starts here.
          </p>
        </div>
      </div>

      <div className="bot">
        <div className="arrivals">New Arrivals</div>
        <div className="cards" >
          {CardData.filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.cName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              
                <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="cName">
                    {item.cName}
                    <div className="value">{item.value}</div>
                  </Card.Title>
                  <Card.Title className="cTime">{item.cTime}</Card.Title>
                  <Card.Text></Card.Text>
                  <div className="lecture">
                    <div className="lecProfile">
                      <Card.Img src={item.lecProfile} />
                    </div>
                    <div className="Name">{item.Name}</div>
                    <div className="Points">
                      <Card.Img src={star} /> {item.Points}
                    </div>
                  </div>
                </Card.Body>
              </Card>
              </div>
              
            );
          })}
          </div>
          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={beginneruideImg}/>
            <Card.Body>
              <Card.Title className="cName">Beginner Guide to Sewing<div className="values">30$</div></Card.Title>
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
          </Card> */}
       
      </div>
    </div>
  );
};

export default CourseHome;
