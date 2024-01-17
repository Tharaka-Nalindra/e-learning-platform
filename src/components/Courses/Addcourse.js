import React, { useState } from "react";
import "./Addcourse.css";
import { Link, useNavigate } from "react-router-dom";



const Addcourse = () => {

  const [courseName,setCoursename] = useState("")
  const navigate = useNavigate()

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    if(!courseName){
      alert("please enter course")
      return;
    }

    try{
      const response = await fetch("http://localhost:5000/api/createpost",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ courseName}),
      });

      alert("Course successfully Added")
      navigate("/courses")

    }catch{

    }
  }


  return (
    <div className="Coursename">
      <h1>Add course</h1>
      <form>
        <label for="Coursename">Coursename:</label>
        <input
          type="text"
          id="Coursename"
          
          name="Coursename"
          value={courseName}
          placeholder="Enter Coursename"
          onChange={(e) => setCoursename(e.target.value)}
        />

        <div className="addbuttons">
        <button onClick={onSubmitHandler}>Add course</button>
        <button ><Link to="/courses">Cancel</Link></button>
        </div>
      </form>
    </div>
  );
};

export default Addcourse;