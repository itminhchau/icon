import React, { useMemo, useState } from "react";
import "./Beaker.css";

interface BeakerProps {}
interface Iitem {
  id: number;
  title: string | number;
}

const Beaker: React.FC<BeakerProps> = () => {
  const min = 0;
  const max = 100;
  const step = 10;
  const smallStep = 5;
  const heightWater = 250;
  const [water, setWater] = useState<number>(min);

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("check", e.target.value);

    setWater(Number(e.target.value));
  };

  /* xxxxxxxx */
  interface Item {
    id: number;
    title: string;
  }

  const itemFake: Item = {
    id: Math.random(),
    title: "-",
  };
  const lastedItem: Item[] = [];

  const getItemFakes = (step: number, smallStep: number): Item[] => {
    const items: Item[] = [];
    for (let i = 1; i < step / smallStep; i++) {
      items.push(itemFake);
    }
    return items;
  };

  const handleItem = (
    max: number,
    min: number,
    step: number,
    smallStep: number
  ): Item[] => {
    const items: Item[] = [];
    for (let i = 0; i <= max - min; i += step) {
      items.push({ id: Math.random(), title: (i + min).toString() });
    }

    items.forEach((item) => {
      if (item.title === max.toString()) {
        lastedItem.push(item);
      } else {
        lastedItem.push(item, ...getItemFakes(step, smallStep));
      }
    });
    console.log(lastedItem);
    return lastedItem;
  };

  return (
    <div className="container">
      <div className="top">
        <div className="circle">
          <div className="in"></div>
        </div>
      </div>
      <div className="cup">
        <div className="water">
          <div
            className="cup1"
            style={{ height: water * (heightWater / max) + 50 }}
          >
            <div className="top1">
              <div className="cricle1">
                <div className="in1"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ruler"
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            width: "fit-content",
            position: "absolute",
            height: heightWater,
            bottom: 20,
            left: "50%",
            zIndex: 110,
          }}
        >
          {handleItem(1000, 0, 200, 100).map((item) => {
            return (
              <span style={{ fontSize: "12.5px", fontWeight: "bold" }}>
                <span style={{ fontWeight: "bold" }}>-</span>
                {item.title}
              </span>
            );
          })}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={smallStep}
        value={water}
        onChange={handleTemperatureChange}
        className="progress"
      />
    </div>
  );
};

export default Beaker;
