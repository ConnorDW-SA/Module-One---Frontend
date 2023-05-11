import React from "react";
import Day from "../../components/unitOne/week1/Day";

const WeekOne: React.FC = () => {
  return (
    <div className="bg-primary text-light">
      <h1>Week one</h1>
      <Day week={1} day={2} />
      <Day week={1} day={3} />
      <Day week={1} day={4} />
      <Day week={1} day={5} />
    </div>
  );
};

export default WeekOne;
