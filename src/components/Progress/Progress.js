import React , {useState} from "react";
import './ProgressModule.css';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import {IoIosNotificationsOutline}  from "react-icons/io";
import {IoCheckmarkDoneCircleSharp}  from "react-icons/io5";
import {AiOutlineFileDone}  from "react-icons/ai";
import welldoneImg from '../images/dashboad/loading 1.png'
// import doneImg from '../../components/images/dashboad/loading 1.png';

export default function ProgressComponent(){
    const [state ] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["S","M" , "T","W" , "T","F" , "S",],
                axisBorder: {
                    color: "#FFFFFF" // White
                  }
            }
        },
        series: [
            {
                name: "series-1",
                data: [100, 100, 100, 100, 100, 100, 100],
                color: "#019393"
            },
            {
                name: "series-2",
                data: [70, 100, 30, 90, 49, 60, 70],
                color: " #112594" // Red
            }
        ]
    });
    return(
        <div className="Dashboard"> 
            <div className="options">
                <CgProfile className="CgProfile-icon"/>
                <ul className="Dash-links" >
                <li><Link to="/Dashboard" >Dashboard</Link></li>
                <li><Link to="/CourseHome">Schedule</Link></li>
                <li><Link to="/Homework">Homework</Link></li>
                <li><Link to="/courses">Courses</Link></li>
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
                <div className="progress-content">
                    <h2>Progress</h2> 
                    <div className="progress-body"> 
                        <div className="progress">
                        <text>Deadline</text>
                            <div className="course-progess">
                                <div className="ponit-col"></div>
                                <div><p>Watch Web Designing Course for Beginners</p>
                                <div className="doning"><div className="doning-task"><AiOutlineFileDone/>15/20</div><div className="donin-prasentage"><IoCheckmarkDoneCircleSharp/>75%</div></div>
                                </div>
                                <div className="deadline">4 Dec</div>
                            </div>

                            <div className="course-progess">
                                <div className="ponit-col"></div>
                                <div><p>Take Web Designing Quiz</p>
                                <div className="doning"><div className="doning-task"><AiOutlineFileDone/>6/20</div><div className="donin-prasentage"><IoCheckmarkDoneCircleSharp/>35%</div></div>
                                </div>
                                <div className="deadline">6 Dec</div>
                            </div>

                            <div className="course-progess">
                                <div className="ponit-col"></div>
                                <div><p>Watch UI/UX Designing Course for Beginners</p>
                                <div className="doning"><div className="doning-task"><AiOutlineFileDone/>5/20</div><div className="donin-prasentage"><IoCheckmarkDoneCircleSharp/>25%</div></div>
                                </div>
                                <div className="deadline">9 Dec</div>
                            </div>

                            <div className="course-progess">
                                <div className="ponit-col"></div>
                                <div><p>Web Designing Course for Beginners</p>
                                <div className="doning"><div className="doning-task"><AiOutlineFileDone/>0/20</div><div className="donin-prasentage"><IoCheckmarkDoneCircleSharp/>0%</div></div>
                                </div>
                                <div className="deadline">12 Dec</div>
                            </div>

                        </div>

                        <div className="task">

                            <div className="taskTime">
                                {/* <div className="taskTime-content"> */}
                                    <div className="colli">14</div>
                                    <div className="collii">Tasks</div>
                                    <div className="colliii">25</div>
                                    <div className="colliv">Hourse</div>
                                {/* </div> */}
                            </div>

                            <div className="taskCompletedTopic">
                            Task Completed(Hours)
                            </div>

                            <div className="taskCompleted">
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                width="300"
                            />
                            </div>

                            <div className="well-done"><img src={welldoneImg} alt="load"/>Well Done</div>
                        </div>
                    </div>    
                   
                    

                </div>
            </div>


        </div>
    

    );

}
