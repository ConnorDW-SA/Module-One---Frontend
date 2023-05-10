import React from "react";
import DayOne from "../../components/unitOne/weekThree/DayOne";
import DayTwo from "../../components/unitOne/weekThree/DayTwo";
import DayThree from "../../components/unitOne/weekThree/DayThree";
import DayFour from "../../components/unitOne/weekThree/DayFour";
import DayFive from "../../components/unitOne/weekThree/DayFive";

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
