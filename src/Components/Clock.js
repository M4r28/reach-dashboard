import React, { Component } from "react";
import "../App.css";


export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="clock">It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// .then(res=> console.log(res.url))