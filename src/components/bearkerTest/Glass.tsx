import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Ruler from "./Ruler";

interface GlassProps {
  min: number;
  max: number;
  step: number;
  smallStep: number;
}

const Glass: React.FC<GlassProps> = ({ min, max, step, smallStep }) => {
  const [waterLevel, setWaterLevel] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setWaterLevel(newValue);
  };

  return (
    <div className="glass">
      <ProgressBar value={waterLevel} min={min} max={max} />
      <Ruler min={min} max={max} step={step} smallStep={smallStep} />
      <input
        type="range"
        min={min}
        max={max}
        value={waterLevel}
        onChange={handleChange}
      />
    </div>
  );
};

export default Glass;
