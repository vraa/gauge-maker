import React, {Component} from "react";
import "./App.css";
import AppBar from "./app-bar";
import Themes, {themes} from "./themes";
import Gauge from "react-radial-gauge";
import GaugeForm from "./gauge-form";

class App extends Component {
    constructor() {
        super();
        this.state = themes.flat;
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
            <div className="app">
                <section className="hero">
                    <AppBar/>
                    <div className="gauge-display">
                        <Gauge
                            className="gauge"
                            {...this.state}
                        />
                    </div>
                </section>
                <section className="content">
                    <Themes onChange={this.applyTheme}/>
                    <GaugeForm
                        onChange={this.handleGaugeChange}
                        {...this.state}
                    />
                </section>
            </div>
        );
    }
}

export default App;
