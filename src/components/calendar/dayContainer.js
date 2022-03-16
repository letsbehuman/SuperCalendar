import React, { Component } from "react";
import dayjs from "dayjs";
import Activities from "./activities";
// AQUI UNOS CONDIFIONALES QUE SEGUN EL DIA SE ASIGNEN LAS ACTIVIDADES

class DayContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const firstDay = dayjs().format("DD");
    const weekDays = [{ name: "Monday" }, { name: "Tuesday" }];
    return (
      <div className="dayCard">
        <div className="date">
          <div>{weekDays[0].name}</div>
          <div>{firstDay}</div>
        </div>
        <Activities />
      </div>
    );
  }
}

export default DayContainer;
