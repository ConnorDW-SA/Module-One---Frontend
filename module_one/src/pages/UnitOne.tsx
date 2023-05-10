import React from "react";
import WeekOne from "./unitOne/WeekOne";
import WeekTwo from "./unitOne/WeekTwo";
import WeekThree from "./unitOne/WeekThree";
import WeekFour from "./unitOne/WeekFour";
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
