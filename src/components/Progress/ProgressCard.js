import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const ProgressCard = (props) => {
  return (
    <div>
      <div className="course-progess">
        <div className="ponit-col"></div>
        <div>
          <p>{props.tskname}</p>
          <div className="doning">
            <div className="doning-task">
              <AiOutlineFileDone />
              15/20
            </div>
            <div className="donin-prasentage">
              <IoCheckmarkDoneCircleSharp />
              75%
            </div>
          </div>
        </div>
        <div className="deadline">6 Dec</div>
      </div>
    </div>
  );
};

export default ProgressCard;
