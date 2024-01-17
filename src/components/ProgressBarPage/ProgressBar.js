// ProgressBar.js
import React from 'react';

const ProgressBar = ({ value }) => {
  return (
    <div>
      <progress max="100" value={value}></progress>
    </div>
  );
};

export default ProgressBar;
