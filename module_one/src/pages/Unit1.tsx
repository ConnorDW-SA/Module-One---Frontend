import React, { useState } from "react";
import Week from "../components/helpers/Week";
import NavigationButtons from "../components/helpers/NavigationButtons";
import Project1 from "../components/unit1projects/week1/project1/Project1";
import Project2 from "../components/unit1projects/week1/project2/Project2";
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

  const [week1, week2, week3, week4] = [
    <Week
      weekNumber={1}
      days={4}
      startingDay={2}
      weekTopic="HTML & CSS"
      projects={[Project1, Project2, Project3, Project4]}
    />,
    <Week weekNumber={2} days={5} startingDay={1} />,
    <Week weekNumber={3} days={5} startingDay={1} />,
    <Week weekNumber={4} isBuildWeek buildWeekNumber={1} />
  ];

  const weeks = [week1, week2, week3, week4];

  const CurrentWeek = weeks[currentWeek - 1];

  return (
    <div className="text-center">
      <NavigationButtons
        handlePrevious={handlePreviousWeek}
        handleNext={handleNextWeek}
        handleSelect={handleSelectWeek}
        length={weeks.length}
        label="Week"
        showPreviousNextButtons={false}
      />
      {CurrentWeek}
    </div>
  );
};

export default UnitOne;
