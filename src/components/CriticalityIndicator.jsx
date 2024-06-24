// src/CriticalityIndicator.jsx
import React from 'react';
import './CriticalityIndicator.scss';

const CriticalityIndicator = ({ percentage }) => {
  let criticality = 'Low';

  if (percentage > 30 && percentage <= 60) {
    criticality = 'Medium';
  } else if (percentage > 60) {
    criticality = 'High';
  }

  const getArrowPosition = () => {
    if (percentage <= 30) {
      return '14%'; // Low range
    } else if (percentage > 30 && percentage <= 60) {
      return '47%'; // Medium range
    } else {
      return '80%'; // High range
    }
  };

  return (
    <div className="criticality-container">
      <div className="criticality-bar">
        <div className="low">Low</div>
        <div className="medium">Medium</div>
        <div className="high">High</div>
      </div>
      <div className="arrow" style={{ left: getArrowPosition() }}>&#9660;</div>
    </div>
  );
};

export default CriticalityIndicator;
