// ProgressBarPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from './ProgressBar'; // Assuming you have a ProgressBar component

const ProgressBarPage = () => {
  const { selectedCount } = useParams();

  // Calculate progress percentage based on the number of selected checkboxes
  const progressPercentage = (selectedCount / 10) * 100;

  return (
    <div>
      <h1>Progress Bar Page</h1>
      <p>Progress: {progressPercentage}%</p>
      <ProgressBar value={progressPercentage} />
    </div>
  );
};

export default ProgressBarPage;
