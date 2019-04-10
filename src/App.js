import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./Components/Clock";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App" />
        <Clock />
      </React.Fragment>
    );
  }
}

export default App;
