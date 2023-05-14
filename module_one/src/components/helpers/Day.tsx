import React from "react";

interface DayProps {
  week: number;
  day: number;
}

const Day: React.FC<DayProps> = ({ week, day }) => {
  return (
    <h2>
      Week {week} Day {day}
    </h2>
  );
};

export default Day;
