import React from "react";

interface DayProps {
  week: number;
  day: number;
}

const Day: React.FC<DayProps> = ({ week, day }) => {
  return (
    <p>
      Week {week} Day {day}
    </p>
  );
};

export default Day;
