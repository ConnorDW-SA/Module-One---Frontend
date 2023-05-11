import React from "react";
import Day from "../../components/unitOne/Day";

const WeekTwo: React.FC = () => {
  const weekNumber = 2;
  const days = 5;
  return (
    <div className="bg-light">
      <h1>Week {weekNumber}</h1>
      {Array.from({ length: days }, (_, i) => (
        <Day key={i} week={weekNumber} day={i + 1} />
      ))}
    </div>
  );
};

export default WeekTwo;
