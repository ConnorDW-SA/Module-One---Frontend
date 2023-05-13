import React, { useState } from "react";
import Day from "./Day";

interface WeekProps {
  weekNumber: number;
  days?: number;
  startingDay?: number;
  isBuildWeek?: boolean;
  buildWeekNumber?: number;
}

const Week: React.FC<WeekProps> = ({
  weekNumber,
  days,
  startingDay,
  isBuildWeek,
  buildWeekNumber
}) => {
  const defaultDays = 5;
  const actualDays = days || defaultDays;
  const [currentProject, setCurrentProject] = useState(1);

  const handleNextProject = () => {
    setCurrentProject((prevProject) => Math.min(prevProject + 1, actualDays));
  };

  const handlePreviousProject = () => {
    setCurrentProject((prevProject) => Math.max(prevProject - 1, 1));
  };

  const handleSelectProject = (projectNumber: number) => {
    setCurrentProject(projectNumber);
  };

  if (isBuildWeek) {
    return (
      <div>
        <h1>Week {weekNumber}</h1>
        <p>Buildweek {buildWeekNumber}</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary text-light">
      <h1>Week {weekNumber}</h1>
      <div>
        <Day
          key={currentProject - 1}
          week={weekNumber}
          day={currentProject - 1 + (startingDay || +1)}
        />
      </div>
      <div>
        <button onClick={handlePreviousProject}>Previous</button>
        {Array.from({ length: actualDays }, (_, i) => (
          <button
            key={i}
            onClick={() => handleSelectProject(i + 1)}
          >{`Project ${i + 1}`}</button>
        ))}
        <button onClick={handleNextProject}>Next</button>
      </div>
    </div>
  );
};

export default Week;
