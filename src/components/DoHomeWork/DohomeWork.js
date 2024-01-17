// DoHomework.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoHomework = () => {
  const topics = [
    'Topic01',
    'Topic02',
    'Topic03',
    'Topic04',
    'Topic05',
    'Topic06',
    'Topic07',
    'Topic08',
    'Topic09',
    'Topic10',
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleCheckboxChange = (topic) => {
    const updatedSelectedTopics = [...selectedTopics];

    if (updatedSelectedTopics.includes(topic)) {
      updatedSelectedTopics.splice(updatedSelectedTopics.indexOf(topic), 1);
    } else {
      updatedSelectedTopics.push(topic);
    }

    setSelectedTopics(updatedSelectedTopics);
  };

  return (
    <div>
      <h1>Do Homework</h1>
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
      <Link to={`/ProgressBarPage/${selectedTopics.length}`}>Go to Progress Bar Page</Link>
    </div>
  );
};

export default DoHomework;
