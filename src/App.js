// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import LandingPage from './components/LandingPage/LandingPage';
import CourseHome from "./components/CourseHome/CourseHome";
import Dashboard from './components/Dashboard/Dashboard';
import Homework from './components/Homework/Homework'
import Progress from './components/Progress/Progress'
import Quiz from './components/Quiz/Quiz';
import TherdNav from './components/TherdNav/TherdNav';
import Courses from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import Setting from './components/Settings/Settings';
import Addcourse from "./components/Courses/Addcourse";
// import Calander from './components/Calander/Calander';
import Calender from "./components/Calander/Calender";
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/addcourse" element={<Addcourse />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/CourseHome" element={<CourseHome />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/TherdNav" element={<TherdNav />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/schedule" element={<Calender />} />
          {/* <Route path="/" element={<Calander />} /> */}
          {/* <Route path="/" element={<Nav />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
