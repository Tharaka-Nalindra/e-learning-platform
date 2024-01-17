// ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value }) => (
  <div className="progress-bar-container">
    <div className="progress-bar-fill" style={{ width: `${value}%` }}></div>
  </div>
);

export default ProgressBar;
