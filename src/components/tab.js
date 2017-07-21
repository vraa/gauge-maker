import React, {Component} from 'react';

class Tab extends Component {
    render() {
        return (
            <div className="tab-content">
                {this.props.children}
            </div>
        )
    }
}

export default Tab;