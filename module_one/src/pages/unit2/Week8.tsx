import React from "react";
import Day from "../../components/unitOne/Day";

const WeekEight: React.FC = () => {
  const weekNumber = 8;
  return (
    <div className="bg-primary text-light">
      <h1>Week {weekNumber}</h1>
      <Day week={4} day={1} isBuildWeek buildWeekNumber={1} />
    </div>
  );
};

export default WeekEight;
