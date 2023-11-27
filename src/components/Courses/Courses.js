import React, { useEffect, useState } from "react";
import "./CoursesModule.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import { IoIosNotificationsOutline } from "react-icons/io";
import pyImg from "../images/course/image 2.png";
import pscyImg from "../images/course/image 3.png";
import statisticImg from "../images/course/Rectangle 5.png";
import CourcesCard from "./CourcesCard";
// import doneImg from '../../components/images/dashboad/loading 1.png';

export default function Course() {


      const [courseposts, setCourseposts] = useState([])

    const getCoueses = async ()=>{
      try{
        const response = await fetch("http://localhost:5000/api/posts")
        const data = await response.json()
        setCourseposts(data)
        console.log(data)
      }catch(error){
        console.log(error.message)
      }
    }


    useEffect(()=>{

       getCoueses();
    },[])
   


    const course = courseposts.map((item) => 
    <CourcesCard crname={item.courseName}/>
    )



  return (
    <div className="Dashboard">
      <div className="options">
        <CgProfile className="CgProfile-icon" />
        <ul className="Dash-links">
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/CourseHome">Schedule</Link>
          </li>
          <li>
            <Link to="/Homework">Homework</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/Progress">Progress</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
        </ul>
      </div>

      <div className="content-body">
        <div className="heder">
          <Button><Link to="/addcourse">Add New Courses</Link></Button>
          <IoIosNotificationsOutline />
        </div>
        <div className="course-content">
          <div className="course-content-content-left">
            <h5>Resent Course</h5>
            <div className="courserow">
            {course}
            </div>
            
          </div>

          <div className="course-content-content-middle"></div>

          <div className="course-content-content-right">
            <h5>Complete Courses</h5>
            <div className="completeCourse">
              <div className="completeCourses-coursePage">
                <p>Introduction to Pscychology</p>
                <img src={pscyImg} alt="pscy" />
              </div>

              <div className="completeCourses-coursePage">
                <p>Python for Beginners</p>
                <img src={pyImg} alt="py" />
              </div>

              <div className="completeCourses-coursePage">
                <p>Statistic for Beginners</p>
                <img src={statisticImg} alt="statistic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
