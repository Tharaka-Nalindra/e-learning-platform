// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import LandingPage from './components/LandingPage/LandingPage';
import CourseHome from "./components/CourseHome/CourseHome";
import Dashboard from './components/Dashboard/Dashboard';
import Homework from './components/Homework/Homework';
import MediaPage from './components/MediaScreen/MediaScreen';
import VideoPage from './components/MediaScreen/VideoPage';
import Calender from './components/Calander/Calander';



// import ProgressBar from './components/Homework/ProgressBar';
import ItemSelectionPage from './components/Homework/ItemSelectionPage';

import Progress from './components/Progress/Progress';
import Quiz from './components/Quiz/Quiz';
import TherdNav from './components/TherdNav/TherdNav';
import Courses from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import Setting from './components/Settings/Settings';
import Help from './components/Help/Help';
import './App.css';
import EndScreen from './components/Quiz/EndScreen';
// import DoHomework from './components/DoHomeWork/DohomeWork';

// import ProgressBarPage from './components/ProgressBarPage/ProgressBarPage'; 
import WebDoHomework from './components/Homework/WebDoHomework';
import WebQuizHomework from './components/Homework/WebQuizHomework';
import UIUX from './components/Homework/UIUXHomework';



// import Calander from './components/Calander/Calander'
// import Nav from './components/Navbar/Nav';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Pass the userName prop to the Nav component */}
        {/* <Nav userName={userName} /> */}
        <Routes>

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Homework" element={<Homework />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/CourseHome" element={<CourseHome />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/TherdNav" element={<TherdNav />} />
          <Route path="/" element={<Courses />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/MediaPage" element={<MediaPage />} />
          <Route path="/VideoPage" element={<VideoPage />} />


          {/* <Route path="/ProgressBar" element={<ProgressBar />} /> */}
          <Route path="/ItemSelectionPage" element={<ItemSelectionPage />} />
          <Route path="/WebDoHomework" element={<WebDoHomework />} />
          <Route path="/WebQuizHomework" element={<WebQuizHomework />} />
          <Route path="/UIUX" element={<UIUX />} />







          


          {/* <Route path="/" element={<Calander />} /> */}
          {/* <Route path="/" element={<Nav />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
