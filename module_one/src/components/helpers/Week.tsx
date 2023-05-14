// Week.tsx
import React, { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface WeekProps {
  weekNumber: number;
  days?: number;
  startingDay?: number;
  isBuildWeek?: boolean;
  buildWeekNumber?: number;
  weekTopic?: string;
  projects?: React.ComponentType[];
}

const Week: React.FC<WeekProps> = ({
  weekNumber,
  days,
  startingDay,
  isBuildWeek,
  buildWeekNumber,
  weekTopic,
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
        <p>Buildweek {buildWeekNumber}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-dark">
        <h1>{weekTopic}</h1>
        <h2>
          Week {weekNumber} Day {currentProject - 1 + (startingDay || +1)}
        </h2>
      </div>
      <div className="project">{CurrentProject && <CurrentProject />}</div>
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
