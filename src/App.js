import React, { Component } from "react";
import "./App.css";
import AppBar from "./app-bar";
import Gauge from "react-radial-gauge";
import GaugeForm from "./gauge-form";
import { themes } from "./themes";

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
            <main className="main">
                <AppBar/>
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
                    <footer>Built by <a href="https://veerasundar.com" title="Veera - JavaScript / React Developer">Veera</a>.</footer>
                </div>
            </main>
        );
    }
}

export default App;
