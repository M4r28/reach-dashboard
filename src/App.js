import React, { Component } from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Background from "./Components/Background";

class App extends Component {

  render() {
    return (
      <React.Fragment>
         
        <Background>
        <Clock />
        </Background> 
      </React.Fragment>
    );
  }
}

export default App;
