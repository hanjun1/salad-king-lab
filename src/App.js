import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends React.Component {
  state = {
    currentSpice: "Medium",
    status: "A little kick",
    levels: [
      "A little kick",
      "Nice",
      "Start mopping your brow",
      "Watch out",
      "Are you sure?",
      "Some like it hot",
      "May cause stomach upset",
    ],
  };
  updateState = () => {
    if (this.state.currentSpice >= 20) {
      this.setState({ status: this.state.levels[6] });
    } else if (this.state.currentSpice >= 15) {
      this.setState({ status: this.state.levels[5] });
    } else if (this.state.currentSpice >= 10) {
      this.setState({ status: this.state.levels[4] });
    } else if (this.state.currentSpice >= 5) {
      this.setState({ status: this.state.levels[3] });
    } else if (this.state.currentSpice >= 3) {
      this.setState({ status: this.state.levels[2] });
    } else if (this.state.currentSpice >= 1) {
      this.setState({ status: this.state.levels[1] });
    } else {
      this.setState({ status: this.state.levels[0] });
    }
  };
  addSpiceLevel = () => {
    if (this.state.currentSpice === "Medium") {
      this.setState({ currentSpice: 1 }, () => {
        this.updateState();
      });
    } else {
      this.setState(
        (state) => ({ currentSpice: state.currentSpice + 1 }),
        () => {
          this.updateState();
        }
      );
    }
  };
  removeSpiceLevel = () => {
    if (this.state.currentSpice === 1 || this.state.currentSpice === "Medium") {
      this.setState({ currentSpice: "Medium" }, () => {
        this.updateState();
      });
    } else {
      this.setState(
        (state) => ({ currentSpice: state.currentSpice - 1 }),
        () => {
          this.updateState();
        }
      );
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Salad King Pepper Chart SPA</h1>
        <div>
          <button onClick={() => this.addSpiceLevel()}>Add Some Heat</button>
          <button onClick={() => this.removeSpiceLevel()}>Cool It Off</button>
        </div>
        <h2>Spice Level: {this.state.currentSpice}</h2>
        <h2>Status: {this.state.status}</h2>
      </div>
    );
  }
}

export default App;
