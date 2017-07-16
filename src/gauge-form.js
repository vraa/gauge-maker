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

    handleCheckChange = (e) => {
        console.log(e.target.checked);
        let st = {};
        st[e.target.id] = e.target.checked;
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
                        />
                        <InputField
                            id="currentValue"
                            label="Gauge Value"
                            value={props.currentValue}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="100"
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
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tick</legend>
                    <div className="field-group two-col">
                        <InputColor
                            id="tickColor"
                            label="Color"
                            value={props.tickColor}
                            onChange={this.handleColorChange}
                        />
                        <InputField
                            id="tickWidth"
                            label="Width"
                            value={props.tickWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="1"
                            max="10"
                        />
                        <InputField
                            id="tickLength"
                            label="Length"
                            value={props.tickLength}
                            onChange={this.handleChange}
                            type="range"
                            min="1"
                            max="20"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Progress</legend>
                    <div className="field-group two-col">
                        <InputColor
                            id="progressColor"
                            label="Color"
                            value={props.progressColor}
                            onChange={this.handleColorChange}
                        />
                        <InputField
                            id="progressWidth"
                            label="Length"
                            value={props.progressWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="1"
                            max="20"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Needle</legend>
                    <div className="field-group two-col">
                        <InputColor
                            id="needleBaseColor"
                            label="Base Color"
                            value={props.needleBaseColor}
                            onChange={this.handleColorChange}
                        />
                        <InputField
                            id="needleBaseSize"
                            label="Base Size"
                            value={props.needleBaseSize}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="20"
                        />
                        <InputColor
                            id="needleColor"
                            label="Needle Color"
                            value={props.needleColor}
                            onChange={this.handleColorChange}
                        />
                        <InputField
                            id="needleWidth"
                            label="Needle Size"
                            value={props.needleWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="20"
                        />
                        <InputField
                            id="needleSharp"
                            label="Needle Size"
                            checked={props.needleSharp}
                            onChange={this.handleCheckChange}
                            type="checkbox"
                        />
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default GaugeForm;