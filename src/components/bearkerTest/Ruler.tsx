import React from "react";

interface RulerProps {
  min: number;
  max: number;
  step: number;
  smallStep: number;
}

const Ruler: React.FC<RulerProps> = ({ min, max, step, smallStep }) => {
  const largeStepCount = (max - min) / step;
  const smallStepCount = largeStepCount * (step / smallStep);

  const renderLargeTicks = () => {
    const ticks = [];
    for (let i = 0; i <= largeStepCount; i++) {
      ticks.push(
        <div className="tick" key={`tick-${i}`}>
          {min + step * i}
        </div>
      );
    }
    return ticks;
  };

  const renderSmallTicks = () => {
    const ticks = [];
    for (let i = 1; i < smallStepCount; i++) {
      if (i % (step / smallStep) !== 0) {
        ticks.push(<div className="small-tick" key={`small-tick-${i}`}></div>);
      }
    }
    return ticks;
  };

  return (
    <div className="ruler">
      <div className="ticks-container">
        {renderLargeTicks()}
        {renderSmallTicks()}
      </div>
    </div>
  );
};

export default Ruler;
