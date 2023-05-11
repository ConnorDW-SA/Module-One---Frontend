import React from "react";
import Day from "../../components/unitOne/Day";

const WeekFive: React.FC = () => {
  const weekNumber = 5;
  const days = 4;
  const startingDay = 2;

  return (
    <div className="bg-primary text-light">
      <h1>Week {weekNumber}</h1>
      {Array.from({ length: days }, (_, i) => (
        <Day key={i} week={weekNumber} day={i + startingDay} />
      ))}
    </div>
  );
};

export default WeekFive;
