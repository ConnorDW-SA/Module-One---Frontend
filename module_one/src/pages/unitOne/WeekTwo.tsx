import React from "react";
import DayOne from "../../components/unitOne/weekTwo/DayOne";
import DayTwo from "../../components/unitOne/weekTwo/DayTwo";
import DayThree from "../../components/unitOne/weekTwo/DayThree";
import DayFour from "../../components/unitOne/weekTwo/DayFour";
import DayFive from "../../components/unitOne/weekTwo/DayFive";
const WeekTwo: React.FC = () => {
  return (
    <div className="bg-light">
      <h1>Week Two</h1>
      <DayOne />
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
    </div>
  );
};

export default WeekTwo;
