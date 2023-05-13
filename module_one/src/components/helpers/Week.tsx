import React, { useState } from "react";
import Day from "./Day";
import NavigationButtons from "./NavigationButtons";

interface WeekProps {
  weekNumber: number;
  days?: number;
  startingDay?: number;
  isBuildWeek?: boolean;
  buildWeekNumber?: number;
  projects?: React.ComponentType[];
}

const Week: React.FC<WeekProps> = ({
  weekNumber,
  days,
  startingDay,
  isBuildWeek,
  buildWeekNumber,
  projects
}) => {
  const defaultDays = 5;
  const actualDays = days || defaultDays;
  const [currentProject, setCurrentProject] = useState(1);
  React.useEffect(() => {
    setCurrentProject(1);
  }, [weekNumber]);

  const handleNextProject = () => {
    setCurrentProject((prevProject) => Math.min(prevProject + 1, actualDays));
  };

  const handlePreviousProject = () => {
    setCurrentProject((prevProject) => Math.max(prevProject - 1, 1));
  };

  const handleSelectProject = (projectNumber: number) => {
    setCurrentProject(projectNumber);
  };

  const CurrentProject = projects && projects[currentProject - 1];

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
        {CurrentProject && <CurrentProject />}
        <Day
          key={currentProject - 1}
          week={weekNumber}
          day={currentProject - 1 + (startingDay || +1)}
        />
      </div>
      <NavigationButtons
        handlePrevious={handlePreviousProject}
        handleNext={handleNextProject}
        handleSelect={handleSelectProject}
        length={actualDays}
        label="Project"
        showSelectButtons={false}
      />
    </div>
  );
};

export default Week;
