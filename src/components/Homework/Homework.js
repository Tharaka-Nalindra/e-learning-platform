import React, { useState } from 'react';
import './HomeworkModule.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import {IoIosNotificationsOutline}  from "react-icons/io";
import {IoCheckmarkDoneCircleSharp}  from "react-icons/io5";
import ProgressBar from './ProgressBar'; // Make sure to import ProgressBar component
import { useParams,} from 'react-router-dom';
import { useProgress } from './ProgressContext';



export default function Dashboard(){
    const { selectedCount } = useParams();
  const { progress } = useProgress();

    return(
        <div className="Dashboard"> 
            <div className="options">
                <CgProfile className="CgProfile-icon"/>
                <ul className="Dash-links" >
                <li><Link to="/Dashboard" >Dashboard</Link></li>
                <li><Link to="/Calender">Schedule</Link></li>
                <li><Link to="/Homework">Homework</Link></li>
                <li><Link to="/CourseHome">Courses</Link></li>
                <li><Link to="/Progress">Progress</Link></li>
                <li><Link to="#">Settings</Link></li>
                <li><Link to="#">Help</Link></li>
            </ul>
            </div>

            <div className="content-body">
                <div className="heder">
                    <Button>Add New Courses</Button>
                    <IoIosNotificationsOutline/>
                </div>
                <div className="content">
                    
                    <div className="content-left">
                        <h5>Resent Course</h5>
                        <duv className="HomeresentCourse">
                            <div className="collI">
                            <div className="HomeTitle"><h3>To Do</h3></div>
                                <div className="HomecourseI">
                                    <p><Link to="/WebDoHomework" >Watch Web Designing Course for Beginners</Link></p>
                                    <div className="progress-lable">progress <div className="pro-date">4 Des</div></div>
                                    {/* <div className="progress-bar"> */}
                                        {/* <div className="progress-bar-fill"></div> */}
                                        <div className="WebProgressBar">
                                        {/* <p>Progress: {progress}%</p> */}
                                        <ProgressBar value={progress} />
                                        {/* </div> */}
                                    </div>
                                </div>    
                                <div className="HomecourseI">
                                    <p><Link to="/WebQuizHomework">Take Web Designing Quiz</Link></p>
                                    <div className="progress-lable">progress<div className="pro-date">6 Des</div></div>
                                    {/* <div className="progress-bar">
                                        <div className="progress-bar-fill"></div>
                                    </div> */}

                                    <div className="WebProgressBar">
                                        {/* <p>Progress: {progress}%</p> */}
                                        <ProgressBar value={progress} />
                                        {/* </div> */}
                                    </div>


                                </div>    
                            </div>
                            <div className="collI">
                            <div className="HomeTitle"><h3>Courses</h3></div>
                                <div className="HomecourseI">
                                    <p><Link to="/WebDoHomework" >Watch Web Designing Course for Beginners</Link></p>
                                    <div className="progress-lable">progress<div className="pro-date">4 Des</div></div>
                                    {/* <div className="progress-bar">
                                        <div className="Home-progress-bar-fill"></div>
                                    </div> */}

                                    <div className="WebProgressBar">
                                        {/* <p>Progress: {progress}%</p> */}
                                        <ProgressBar value={progress} />
                                        {/* </div> */}
                                    </div>


                                </div>    
                            </div>
                            <div className="collI">
                            <div className="HomeTitle"><h3>Assignments/Quiz</h3></div>
                                <div className="HomecourseI">
                                    <p><Link to="/WebQuizHomework">Take Web Designing Quiz</Link></p>
                                    <div className="progress-lable">progress<div className="pro-date">6 Des</div></div>
                                    {/* <div className="progress-bar">
                                        <div className="progress-bar-fill"></div>
                                    </div> */}

                                    <div className="WebProgressBar">
                                        {/* <p>Progress: {progress}%</p> */}
                                        <ProgressBar value={progress} />
                                        {/* </div> */}
                                    </div>



                                </div>    
                            </div>
                            <div className="collI">
                            <div className="HomeTitle"><h3>Completed</h3><IoCheckmarkDoneCircleSharp/></div>
                                <div className="HomecourseII">
                                    <p><Link to="/UIUX">Watch UI/UX Designing Course for Beginners</Link></p>
                                    <div className="progress-lable">progress<div className="pro-date">9 Des</div></div>
                                    {/* <div className="progress-bar">
                                        <div className="progress-bar-fill"></div>
                                    </div> */}

                                    <div className="WebProgressBar">
                                        {/* <p>Progress: {progress}%</p> */}
                                        <ProgressBar value={progress} />
                                        {/* </div> */}
                                    </div>



                                </div>    
                            </div>
                            
                        </duv>
                        
                    </div>
                   

                </div>
            </div>


        </div>
    

    );

}
