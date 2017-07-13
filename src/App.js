import React, {Component} from "react";
import "./App.css";

import Gauge from "./gauge";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Gauge
                    size="120"
                />
            </div>
        );
    }
}

export default App;
