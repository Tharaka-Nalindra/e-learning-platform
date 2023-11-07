import React from "react";
import './DashboardModule.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import {IoIosNotificationsOutline}  from "react-icons/io";
import doneImg from '../../components/images/dashboad/loading 1.png';

export default function Dashboard(){
    return(
        <div className="Dashboard"> 
            <div className="options">
                <CgProfile className="CgProfile-icon"/>
            <ul className="Dash-links" >
                <li><Link to="/Dashboard" >Dashboard</Link></li>
                <li><Link to="/CourseHome">Schedule</Link></li>
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
                        <duv className="resentCourse">
                        
                            <div className="courseI">
                                <p>Web Designing Course for Beginners</p>
                                <div className="dashprogress-lable">progress</div>
                                <div className="dashprogress-bar">
                                    <div className="progress-bar-fill"></div>
                                </div>
                                
                            </div>
                            <div className="courseI">
                                <p>UI/UX Designing Course for Beginners</p>
                                <div className="dashprogress-lable">progress</div>
                                <div className="dashprogress-bar">
                                    <div className="progress-bar-fill"></div>
                                </div>
                            </div>
                        </duv>
                        <div className="homeWork">
                            <h5>Home work</h5>
                            <div className="HomeWorkI">
                            <div className="score"></div>
                                <p>Web Designing Course for Beginners</p>
                                <div className="Date-prasentage">
                                <div className="prasentage">75%</div>
                                <div className="date">4 Des</div>
                                </div>
                            </div>
                            <div className="HomeWorkI">
                            <div className="score"></div>
                                <p>Take Web Designing Quiz</p>
                                <div className="Date-prasentage">
                                <div className="prasentage">75%</div>
                                <div className="date">4 Des</div>
                                </div>
                            </div>
                            <div className="HomeWorkI">
                            <div className="score"></div>
                                <p>Watch UI/UX Designing Course for Beginners</p>
                                <div className="Date-prasentage">
                                <div className="prasentage">75%</div>
                                <div className="date">4 Des</div>
                                </div>
                            </div>
                            <div className="HomeWorkI">
                                <div className="score"></div>
                                <p>Beginner Guide to Sewing</p>
                                <div className="Date-prasentage">
                                <div className="prasentage">75%</div>
                                <div className="date">4 Des</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <duv className="schedule">
                        <h5>Schedule</h5>
                        <div className="calander"></div>
                        <div className="done">
                            <img src={doneImg} alt="weldone"/>
                            Well Done
                        </div>
                    </duv>

                </div>
            </div>


        </div>
    

    );

}
