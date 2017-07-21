import React, {Component} from 'react';
import "./tabs.css";

class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    }

    switchTab = (tabID) => {
        this.setState({
            activeTab: tabID
        });
    };

    render() {
        let tabs = this.props.children.map((content, id) => {
            return {
                id,
                content
            }
        });

        return (
            <div className="tabs">
                <ul>
                    {
                        tabs.map((tab, idx) => {
                            return (
                                <li
                                    className={idx === this.state.activeTab ? 'active' : ''}
                                    key={`tab-${idx}`}
                                    onClick={this.switchTab.bind(this, idx)}
                                >
                                    {tab.content.props.label}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="tab-content-wrapper">
                    {
                        tabs.find((tab) => tab.id === this.state.activeTab).content
                    }
                </div>
            </div>
        )
    }
}

export default Tabs;