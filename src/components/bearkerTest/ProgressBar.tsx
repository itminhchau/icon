import React from "react";

interface ProgressBarProps {
  value: number;
  min: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, min, max }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
