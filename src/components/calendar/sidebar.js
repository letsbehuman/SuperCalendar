import React from "react";
import dayjs from "dayjs";
import Selector from "../selector";

const Sidebar = () => {
  const dayjs = require("dayjs");
  dayjs().format();

  dayjs().set("month", 1);

  const today = dayjs().format("DD/MM/YY");
  return (
    <div className="sidebar">
      <div>{today}</div>
      <input type="text" className="textArea"></input>
    </div>
  );
};

export default Sidebar;
