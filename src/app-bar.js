import React, {Component} from 'react';
import './app-bar.css';

class AppBar extends Component {

    render() {
        return (
            <header className="app-bar">
                <h1>Gauge Generator</h1>
                <p className="share"><a className="twitter-share-button"
                      href="https://twitter.com/intent/tweet"
                      data-size="large">
                    Tweet</a></p>
            </header>
        )
    }

}

export default AppBar;