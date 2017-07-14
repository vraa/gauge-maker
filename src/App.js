import React, {Component} from "react";
import "./App.css";
import AppBar from "./app-bar";
import Gauge from "./gauge";
import GaugeExport from "./gauge-export";
import GaugeForm from "./gauge-form";

class App extends Component {
    constructor() {
        super();
        this.state = {
            size: 120,
            currentValue: 60
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
                <Gauge
                    {...this.state}
                />
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
