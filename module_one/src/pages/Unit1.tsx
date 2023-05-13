import React, { useState } from "react";
import Week from "../components/day&week/Week";
import Project1 from "../components/unit1projects/week1/Project1";
import Project2 from "../components/unit1projects/week1/Project2";
import Project3 from "../components/unit1projects/week1/Project3";
import Project4 from "../components/unit1projects/week1/Project4";

const UnitOne: React.FC = () => {
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
    <Week weekNumber={1} days={4} startingDay={2} />,
    <Week weekNumber={2} days={5} startingDay={1} />,
    <Week weekNumber={3} days={5} startingDay={1} />,
    <Week weekNumber={4} isBuildWeek buildWeekNumber={1} />
  ];

  const CurrentWeek = weeks[currentWeek - 1];

  return (
    <div>
      <h1>Unit One</h1>
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

export default UnitOne;
