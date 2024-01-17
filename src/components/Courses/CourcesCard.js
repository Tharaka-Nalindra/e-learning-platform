import React from "react";

const CourcesCard = (props) => {
  return (
    <div>
      <div className="course-coursePage">
        <div className="courseCol3">
          <div className="courses-coursePage">
            <p>{props.crname}</p>
            <div className="courseprogress-lable">progress</div>
            <div className="courseprogress-bar">
              <div className="courseprogress-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourcesCard;