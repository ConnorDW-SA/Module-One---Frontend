import React from "react";
import WeekOne from "./Week1";
import WeekTwo from "./Week2";
import WeekThree from "./Week3";
import WeekFour from "./Week4";
const UnitOne: React.FC = () => {
  return (
    <div>
      <h1>Unit One</h1>
      <WeekOne />
      <WeekTwo />
      <WeekThree />
      <WeekFour />
    </div>
  );
};

export default UnitOne;
