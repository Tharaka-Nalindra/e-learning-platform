import React from "react";
import { useState } from "react";
import { useContext } from "react";
import './Quizmodule.css';
import TherdNav from '../TherdNav/TherdNav';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import { GrNext } from "react-icons/gr";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Questions } from "./helpers/Questions";
import { GameStateContext } from "./helpers/Contexts";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, gameState, setGameState, /*userName */} = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
    //   setGameState("finished");
    navigate("/CourseHome");
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setOptionChosen("");
    setGameState("menu");
    navigate("/CourseHome");
  };

  return (
    <div >
      <div className="nav"><TherdNav/></div>
      <div className="quizeTopic"><p>Web Development for beginners Web Development Quiz 01</p></div>
          
      <div className="quizBody">
        <div>
          <Button  variant="" type="button" className="previouse-btn" onClick={previousQuestion}>Previouse</Button>
        </div>

        <div className="abc">
          <div className="Question-num">Question {currentQuestion + 1} out of {Questions.length}</div>
          <div className="Questions">
            <div className="Question"><h3>{Questions[currentQuestion].prompt}</h3></div>
            
            <Form action="" className="QAnswer">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="optionA"
                  checked={optionChosen === "optionA"}
                  onChange={() => chooseOption("optionA")}
                />
                {Questions[currentQuestion].optionA}
                
              </label>
              
              <label>
                <input
                  type="radio"
                  name="option"
                  value="optionB"
                  checked={optionChosen === "optionB"}
                  onChange={() => chooseOption("optionB")}
                />
                {Questions[currentQuestion].optionB}
                
              </label>
              
              <label>
                <input
                  type="radio"
                  name="option"
                  value="optionC"
                  checked={optionChosen === "optionC"}
                  onChange={() => chooseOption("optionC")}
                />
                {Questions[currentQuestion].optionC}
                
              </label>
              
              <label>
                <input
                  type="radio"
                  name="option"
                  value="optionD"
                  checked={optionChosen === "optionD"}
                  onChange={() => chooseOption("optionD")}
                />
                {Questions[currentQuestion].optionD}
                
              </label>

              <label>
                <input
                  type="radio"
                  name="option"
                  value="optionE"
                  checked={optionChosen === "optionE"}
                  onChange={() => chooseOption("optionE")}
                />
                {Questions[currentQuestion].optionD}
                
              </label>
            </Form>
          </div>
          <div className="courseName">Web Designing Course for Beginners</div>
          
          {gameState === "finished" ? (
            <Button onClick={restartQuiz} id="nextQuestion" variant="" type="button" className="Next-btn">
              Restart Quiz
            </Button>
          ) : (
            <Button onClick={nextQuestion} id="nextQuestion" variant="" type="button" className="Next-btn">
              {currentQuestion === Questions.length - 1 ? "Finish" : "Next"}
            </Button>
          )}
        </div>

                <div className="Question_numbers">
                    
                    <div className="number">
                        <MdArrowBackIosNew/>



                        <div>
                            {Questions.map((_, index) => (
                            <Button
                                key={index + 1}
                                type="button"
                                onClick={() => setCurrentQuestion(index)}
                                className={`question-button ${currentQuestion === index ? "selected" : ""}`}
                            >
                                {index + 1}
                            </Button>
                            ))}
                        </div>


                       
                        <div className="nectArrow"><IoIosArrowForward/></div>
                    </div>
                </div>

            </div>
        </div>
    

    );

}