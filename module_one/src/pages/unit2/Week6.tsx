import React from "react";
import Day from "../../components/unitOne/Day";

const WeekFive: React.FC = () => {
  const weekNumber = 6;

  return (
    <div className="bg-light">
      <h1>Week {weekNumber}</h1>
      <Day week={weekNumber} day={3} />
      <Day week={weekNumber} day={4} />
    </div>
  );
};

export default WeekFive;
