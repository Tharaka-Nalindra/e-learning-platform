// DoHomework.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from './ProgressContext';
import './Homework.css';
import { FaArrowCircleLeft } from "react-icons/fa";



const DoHomework = () => {
  const topics = [
    'Topic 01',
    'Topic 02',
    'Topic 03',
    'Topic 04',
    'Topic 05',
    'Topic 06',
    'Topic 07',
    'Topic 08',
    'Topic 09',
    'Topic 10',
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);
  const { updateProgress } = useProgress();

  const handleCheckboxChange = (topic) => {
    const updatedSelectedTopics = [...selectedTopics];

    if (updatedSelectedTopics.includes(topic)) {
      updatedSelectedTopics.splice(updatedSelectedTopics.indexOf(topic), 1);
    } else {
      updatedSelectedTopics.push(topic);
    }

    setSelectedTopics(updatedSelectedTopics);
    updateProgress(updatedSelectedTopics.length);
  };

  return (
    <div>
      <h1>Web Designing Course for Beginners</h1>
      <form>
        {topics.map((topic, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedTopics.includes(topic)}
                onChange={() => handleCheckboxChange(topic)}
              />
              {topic}
            </label>
          </div>
        ))}
      </form>
      {/* <p>Selected Topics: {selectedTopics.join(', ')}</p> */}
      <div className='HomeBackButton'>
      <Link to="/Homework"><FaArrowCircleLeft /> back</Link>
      </div>
    </div>
  );
};

export default DoHomework;
