import React from "react";
import DayOne from "../../components/unitOne/week3/DayOne";
import DayTwo from "../../components/unitOne/week3/DayTwo";
import DayThree from "../../components/unitOne/week3/DayThree";
import DayFour from "../../components/unitOne/week3/DayFour";
import DayFive from "../../components/unitOne/week3/DayFive";

const WeekThree: React.FC = () => {
  return (
    <div className="bg-dark">
      <h1 className="text-light">Week Three</h1>
      <DayOne />
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
    </div>
  );
};

export default WeekThree;
