import React from "react";
import DayTwo from "../../components/unitOne/weekOne/DayTwo";
import DayThree from "../../components/unitOne/weekOne/DayThree";
import DayFour from "../../components/unitOne/weekOne/DayFour";
import DayFive from "../../components/unitOne/weekOne/DayFive";
const WeekOne: React.FC = () => {
  return (
    <div className="bg-primary">
      <h1>Week one</h1>
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
    </div>
  );
};

export default WeekOne;
