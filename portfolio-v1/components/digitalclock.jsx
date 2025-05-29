import React, { useEffect, useState } from "react";
import moment from "moment";

const SegmentSVG = ({ num }) => {
  const activeSegments = {
    0: ["a", "b", "c", "d", "e", "f"],
    1: ["b", "c"],
    2: ["a", "b", "d", "e", "g"],
    3: ["a", "b", "c", "d", "g"],
    4: ["b", "c", "f", "g"],
    5: ["a", "c", "d", "f", "g"],
    6: ["a", "c", "d", "e", "f", "g"],
    7: ["a", "b", "c"],
    8: ["a", "b", "c", "d", "e", "f", "g"],
    9: ["a", "b", "c", "d", "f", "g"]
  };

  const isOn = (seg) =>
    activeSegments[num]?.includes(seg) ? "#3b82f6" : "rgba(0,0,0,0.10)";

  return (
    <svg
      viewBox="0 0 290 480"
      className="mx- w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <g id="unit-h">
          <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z" />
        </g>
        <g id="unit-v">
          <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z" />
        </g>
      </defs>
      <use href="#unit-h" x="30" y="0" style={{ fill: isOn("a") }} />
      <use href="#unit-v" x="220" y="30" style={{ fill: isOn("b") }} />
      <use href="#unit-v" x="220" y="250" style={{ fill: isOn("c") }} />
      <use href="#unit-h" x="30" y="440" style={{ fill: isOn("d") }} />
      <use href="#unit-v" x="0" y="250" style={{ fill: isOn("e") }} />
      <use href="#unit-v" x="0" y="30" style={{ fill: isOn("f") }} />
      <use href="#unit-h" x="30" y="220" style={{ fill: isOn("g") }} />
    </svg>
  );
};

const DigitalClock = ({ scale = 1 }) => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.format("HH");
  const minute = time.format("mm");
  const second = time.format("ss");

  const renderDigits = (str) => (
    <>
      <div className="w-[65px] h-[120px]">
        <SegmentSVG num={parseInt(str[0])} />
      </div>
      <div className="w-[65px] h-[120px]">
        <SegmentSVG num={parseInt(str[1])} />
      </div>
    </>
  );

  return (
    <div className="flex justify-center items-center text-white">
      <div
        className="flex items-center bg-[#232525]/10 rounded-lg shadow-lg shadow-gray-400"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      >
        <div className="relative flex mx-4">
          {renderDigits(hour)}
          <div className="absolute right-[-20px] top-[40px] w-2.5 h-2.5 bg-[#3b82f6] rounded-sm"></div>
          <div className="absolute right-[-20px] top-[90px] w-2.5 h-2.5 bg-[#3b82f6] rounded-sm"></div>
        </div>
        <div className="relative flex mx-4">
          {renderDigits(minute)}
          <div className="absolute right-[-20px] top-[40px] w-2.5 h-2.5 bg-[#3b82f6] rounded-sm"></div>
          <div className="absolute right-[-20px] top-[90px] w-2.5 h-2.5 bg-[#3b82f6] rounded-sm"></div>
        </div>
        <div className="flex mx-4">{renderDigits(second)}</div>
      </div>
    </div>
  );
};

export default DigitalClock;
