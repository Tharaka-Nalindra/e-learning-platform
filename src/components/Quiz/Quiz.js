import React from "react";
import './Quizmodule.css';
import TherdNav from '../TherdNav/TherdNav';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
// GrFormNext gr
// IoIosArrowBack io
// GrNext gr

export default function Dashboard(){
    return(
        <div >
            <div className="nav"><TherdNav/></div>
            <div className="quizeTopic"><p>Web Development for beginners Web Development Quiz 01</p></div>
            

            <div className="quizBody">
                <div>
                    <Button  variant="" type="button" className="previouse-btn">Previouse</Button>
                </div>

                <div>
                    <div className="Question-num">Question 15 out of 25</div>
                    <div className="Questions">
                        <div className="Question"><h3>Question 15</h3></div>
                        
                        <Form action="">

                            <input type="radio" id="one" name="answer"/>
                            <label for="one">Answer 1 </label><br/>

                            <input type="radio" id="one" name="answer"/>
                            <label for="one">Answer 2 </label><br/>

                            <input type="radio" id="one" name="answer"/>
                            <label for="one" >Answer 3 </label><br/>

                            <input type="radio" id="one" name="answer"/>
                            <label for="one">Answer 4 </label><br/>

                            <input type="radio" id="one" name="answer"/>
                            <label for="one">Answer 5 </label><br/>

                        </Form>
                    </div>
                    <div className="courseName">Web Designing Course for Beginners</div>
                    <Button  variant="" type="button" className="Next-btn">Next</Button>
                </div>

                <div className="Question_numbers">
                    
                    <div className="number">
                        <MdArrowBackIosNew/>
                        <div>
                            <Button type="button" value="14" onclick="display.value = '14'">14</Button>
                            <Button type="button" value="DE" onclick="display.value = '15'">15</Button>
                            <Button type="button" value="." onclick="display.value += '15'">16</Button>
                        </div>
                        <div>
                            <Button type="button" value="7" onclick="display.value += '7'">17</Button>
                            <Button type="button" value="8" onclick="display.value += '8'">18</Button>
                            <Button type="button" value="9" onclick="display.value += '9'">19</Button>
                        </div>
                        <div>
                            <Button type="button" value="4" onclick="display.value += '4'">20</Button>
                            <Button type="button" value="5" onclick="display.value += '5'">21</Button>
                            <Button type="button" value="6" onclick="display.value += '6'">22</Button>
                        </div>
                        <div>
                            <Button type="button" value="1" onclick="display.value += '1'">23</Button>
                            <Button type="button" value="2" onclick="display.value += '2'">24</Button>
                            <Button type="button" value="3" onclick="display.value += '3'">25</Button>
                        </div>
                        <div className="nectArrow"><IoIosArrowForward/></div>
                    </div>
                </div>

            </div>
        </div>
    

    );

}

