import React from "react";
import Day from "../../components/unitOne/Day";

const WeekThree: React.FC = () => {
  const weekNumber = 3;
  const days = 5;
  return (
    <div className="bg-dark text-light">
      <h1>Week {weekNumber}</h1>
      {Array.from({ length: days }, (_, i) => (
        <Day key={i} week={weekNumber} day={i + 1} />
      ))}
    </div>
  );
};

export default WeekThree;
