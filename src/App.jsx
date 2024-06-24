// src/App.jsx
import React, { useState } from 'react';
import CriticalityIndicator from './components/CriticalityIndicator';
// import './App.css';

function App() {
  const [percentage, setPercentage] = useState(0);

  const handleChange = (e) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setPercentage(value);
  };

  return (
    <div className="App">
      <h1>Criticality Indicator</h1>
      <textarea
        value={percentage}
        onChange={handleChange}
        placeholder="Enter a percentage"
        rows="3"
        cols="7"
        draggable={false}
      />
      <CriticalityIndicator percentage={percentage} />
    </div>
  );
}

export default App;
