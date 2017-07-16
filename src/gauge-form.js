import React, {Component} from "react";
import InputField from "./components/input-field";
import InputColor from "./components/input-color";
import "./gauge-form.css";

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

    handleColorChange = (id, color) => {
        let st = {};
        st[id] = color.hex;
        this.props.onChange(st);
    };

    render() {
        let props = this.props;
        return (
            <form className="gauge-form">
                <fieldset>
                    <div className="field-group two-col">
                        <InputField
                            id="size"
                            label="Gauge Size"
                            onChange={this.handleChange}
                            type="range"
                            min="60"
                            max="200"
                            value={props.size}
                            placeholder={'60 to 200'}
                        />
                        <InputField
                            id="currentValue"
                            label="Gauge Value"
                            value={props.currentValue}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="100"
                            placeholder={'0 to 100'}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Dial</legend>
                    <div className="field-group two-col">
                        <InputColor
                            id="dialColor"
                            label="Color"
                            value={props.dialColor}
                            onChange={this.handleColorChange}
                        />
                        <InputField
                            id="dialWidth"
                            label="Size"
                            value={props.dialWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="20"
                            placeholder={'0 to 20'}
                        />
                    </div>
                </fieldset>

            </form>
        )
    }
}

export default GaugeForm;