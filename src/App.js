import React, {Component} from "react";
import "./App.css";
import AppBar from "./app-bar";
import Themes, {themes} from "./themes";
import Gauge from "react-svg-gauge";
import GaugeForm from "./gauge-form";
import GaugeExport from "./gauge-export";

class App extends Component {
    constructor() {
        super();
        this.state = themes.regular;
    }

    handleGaugeChange = (st) => {
        this.setState(Object.assign(
            {},
            this.state,
            st
        ));
    };

    applyTheme = (theme) => {
        this.setState(Object.assign(
            {},
            theme
        ));
    };

    render() {
        return (
            <div className="App">
                <AppBar/>
                <Themes onChange={this.applyTheme}/>
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
