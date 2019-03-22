import React, { Component } from "react";
import "./App.css";
import Gauge from "react-radial-gauge";
import GaugeForm from "./gauge-form";
import { themes } from "./themes";

class App extends Component {

  state = {
    ...{
      size: 200,

      dialWidth: 10,
      tickLength: 5,
      tickWidth: 2,

      tickInterval: 10,

      maximumValue: 100,
      currentValue: 25,
      progressWidth: 5,
      progressRoundedEdge: true,
      downProgressColor: "red",
      progressFontSize: "30",
      progressFont: "Sans-serif",

      needle: true,
      needleBaseSize: 5,

      needleWidth: 2,
      needleSharp: false,
    },
    ...themes.watermelon
  };

  handleGaugeChange = (st) => {
    this.setState(Object.assign(
      {},
      this.state,
      st
    ));
  };

  applyTheme = (theme) => {
    const oldTheme = this.state;
    this.setState({ ...oldTheme, ...theme });
  };

  render() {
    return (
      <main className="main">
        <div className="app">
          <div className="gauge-display">
            <Gauge
              className="gauge"
              {...this.state}
            />
          </div>
          <section className="content">
            <GaugeForm
              onChange={this.handleGaugeChange}
              onThemeChange={this.applyTheme}
              {...this.state}
            />
          </section>
        </div>
      </main>
    );
  }
}

export default App;
