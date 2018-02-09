import React, {Component} from 'react';
import './app-bar.css';

class AppBar extends Component {

    render() {
        return (
            <header className="app-bar">
                <h1>Gauge Generator</h1>
                <div className='ad leaderboard'>
                    <img src="https://placeimg.com/720/90/any"/>
                </div>
            </header>
        )
    }

}

export default AppBar;