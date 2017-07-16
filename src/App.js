import React, {Component} from "react";
import "./App.css";
import AppBar from "./app-bar";
import Gauge from "react-svg-gauge";
import GaugeForm from "./gauge-form";
import GaugeExport from "./gauge-export";

class App extends Component {
    constructor() {
        super();
        this.state = {
            size: 200,

            dialWidth: 10,
            dialColor: "#eee",

            tickLength: 3,
            tickWidth: 1,
            tickColor: "#cacaca",
            tickInterval: 10,

            maximumValue: 100,
            currentValue: 25,
            progressWidth: 5,
            progressColor: "#3d3d3d",
            progressRoundedEdge: true,
            downProgressColor: "red",

            needle: true,
            needleBaseSize: 5,
            needleBaseColor: '#9d9d9d',
            needleWidth: 2,
            needleSharp: false,
            needleColor: '#8a8a8a'
        };
    }

    handleGaugeChange = (st) => {
        this.setState(Object.assign(
            {},
            this.state,
            st
        ));
    };

    render() {
        return (
            <div className="App">
                <AppBar/>
                <div className="gauge-display">
                    <Gauge
                        className="gauge"
                        {...this.state}
                    />
                </div>
                <GaugeExport/>
                <GaugeForm
                    onChange={this.handleGaugeChange}
                    {...this.state}
                />
            </div>
        );
    }
}

export default App;
