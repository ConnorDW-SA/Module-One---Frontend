import React, { useState } from "react";
import Day from "../../components/unitOne/Day";

const WeekOne: React.FC = () => {
  const weekNumber = 1;
  const days = 4;
  const startingDay = 2;
  const [currentProject, setCurrentProject] = useState(1);

  const handleNextProject = () => {
    setCurrentProject((prevProject) => Math.min(prevProject + 1, days));
  };

  const handlePreviousProject = () => {
    setCurrentProject((prevProject) => Math.max(prevProject - 1, 1));
  };

  const handleSelectProject = (projectNumber: number) => {
    setCurrentProject(projectNumber);
  };

  return (
    <div className="bg-primary text-light">
      <h1>Week {weekNumber}</h1>
      <Day
        key={currentProject - 1}
        week={weekNumber}
        day={currentProject - 1 + startingDay}
      />
      <div>
        <button onClick={handlePreviousProject}>Previous</button>
        {Array.from({ length: days }, (_, i) => (
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

export default WeekOne;
