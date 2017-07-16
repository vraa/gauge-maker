import React, {Component} from "react";
import "./App.css";
import AppBar from "./app-bar";
import Themes, {themes} from "./themes";
import Gauge from "react-svg-gauge";
import GaugeForm from "./gauge-form";
import GaugeExport from "./gauge-export";
import AppFooter from "./app-footer";

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

                <div className="gauge-display">
                    <Gauge
                        className="gauge"
                        {...this.state}
                    />
                </div>
                <Themes onChange={this.applyTheme}/>
                <GaugeExport/>
                <GaugeForm
                    onChange={this.handleGaugeChange}
                    {...this.state}
                />
                <AppFooter/>
            </div>
        );
    }
}

export default App;
