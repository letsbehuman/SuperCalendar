import React, { Component } from "react";
import "./App.css";
// import Navigation from "./components/navigation";
// import Calendar from "./components/calendar/calendar";
// import Register from "./components/register";
// import Signin from "./components/signin";
import Month from "./components/calendar/month";
import Selector from "./components/selector";
import Sidebar from "./components/calendar/sidebar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignIn: false,
      user: {
        id: "",
        name: "",
      },
      input: "",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Super Calendar</h1>
        <Selector />
        <div className="app-container">
          <Sidebar />
          <Month />
        </div>
      </div>
    );
  }
}

export default App;
