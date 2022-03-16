import React from "react";
import DayContainer from "./dayContainer";

const Week = () => {
  return (
    <div>
      <div className="dayContainer">
        <DayContainer className="weekday" />
        <DayContainer className="weekday" />
        <DayContainer className="weekday" />
        <DayContainer className="weekday" />
        <DayContainer className="weekday" />
        <DayContainer className="weekend" />
        <DayContainer className="weekend" />
      </div>
    </div>
  );
};

export default Week;
