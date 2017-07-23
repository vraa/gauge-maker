import React, {Component} from 'react';
import './app-bar.css';

class AppBar extends Component {

    render() {
        return (
            <header className="app-bar">
                <h1>Gauge Generator</h1>
                <p>
                    <a className="react" href="https://www.npmjs.com/package/react-radial-gauge"
                       title="React Radial Gauge - visual gauges for your react app">React Component</a>
                </p>
            </header>
        )
    }

}

export default AppBar;