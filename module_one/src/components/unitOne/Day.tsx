import React from "react";

interface DayProps {
  week: number;
  day: number;
  isBuildWeek?: boolean;
  buildWeekNumber?: number;
}

const Day: React.FC<DayProps> = ({
  week,
  day,
  isBuildWeek,
  buildWeekNumber
}) => {
  return (
    <p>
      Week {week} {isBuildWeek ? `Buildweek ${buildWeekNumber}` : `Day ${day}`}
    </p>
  );
};

export default Day;
