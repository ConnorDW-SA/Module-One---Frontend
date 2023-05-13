import React, { useState } from "react";
import Week from "../components/day&week/Week";

const UnitTwo: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => Math.min(prevWeek + 1, weeks.length));
  };

  const handlePreviousWeek = () => {
    setCurrentWeek((prevWeek) => Math.max(prevWeek - 1, 1));
  };

  const handleSelectWeek = (weekNumber: number) => {
    setCurrentWeek(weekNumber);
  };

  const weeks = [
    <Week weekNumber={5} days={4} startingDay={2} />,
    <Week weekNumber={6} days={4} startingDay={2} />,
    <Week weekNumber={7} days={5} startingDay={1} />,
    <Week weekNumber={4} isBuildWeek buildWeekNumber={2} />
  ];

  const CurrentWeek = weeks[currentWeek - 1];

  return (
    <div>
      <h1>Unit Two</h1>
      {CurrentWeek}
      <div>
        <button onClick={handlePreviousWeek}>Previous</button>
        {Array.from({ length: weeks.length }, (_, i) => (
          <button key={i} onClick={() => handleSelectWeek(i + 1)}>{`Week ${
            i + 1
          }`}</button>
        ))}
        <button onClick={handleNextWeek}>Next</button>
      </div>
    </div>
  );
};

export default UnitTwo;
