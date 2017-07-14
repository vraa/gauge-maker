import React, {Component} from "react";
import InputField from "./input-field";

class GaugeForm extends Component {

    constructor() {
        super();
        this.state = {
            size: 120,
            currentValue: 60
        }
    };

    handleChange = (e) => {
        let st = {};
        st[e.target.id] = e.target.value;
        this.props.onChange(st);
    };

    render() {
        let props = this.props;
        return (
            <form>
                <h2>Customize Gauge</h2>
                <div className="primary">
                    <InputField
                        id="size"
                        label="Size"
                        value={props.size}
                        onChange={this.handleChange}
                    />
                    <InputField
                        id="currentValue"
                        label="Value"
                        value={props.currentValue}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        )
    }
}

export default GaugeForm;