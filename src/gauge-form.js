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
                <fieldset className="primary">
                    <div className="field-group">
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

                <fieldset className="colors">
                    <div className="field-group">
                        <InputColor
                            id="dialColor"
                            label="Dial"
                            value={props.dialColor}
                            onChange={this.handleColorChange}
                        />
                        <InputColor
                            id="progressColor"
                            label="Progress"
                            value={props.progressColor}
                            onChange={this.handleColorChange}
                        />
                        <InputColor
                            id="tickColor"
                            label="Tick"
                            value={props.tickColor}
                            onChange={this.handleColorChange}
                        />
                        <InputColor
                            id="needleColor"
                            label="Needle"
                            value={props.needleColor}
                            onChange={this.handleColorChange}
                        />
                        <InputColor
                            id="needleBaseColor"
                            label="Needle Base"
                            value={props.needleBaseColor}
                            onChange={this.handleColorChange}
                        />
                        <InputField
                            id="needleSharp"
                            label="Sharp Needle?"
                            checked={props.needleSharp}
                            onChange={this.handleCheckChange}
                            type="checkbox"
                        />
                    </div>
                </fieldset>

                <fieldset className="sizes">
                    <div className="field-group">
                        <InputField
                            id="dialWidth"
                            label="Dial"
                            value={props.dialWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="20"
                        />
                        <InputField
                            id="progressWidth"
                            label="Progress Width"
                            value={props.progressWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="1"
                            max="20"
                        />
                        <InputField
                            id="needleWidth"
                            label="Needle"
                            value={props.needleWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="20"
                        />
                        <InputField
                            id="needleBaseSize"
                            label="Needle Base"
                            value={props.needleBaseSize}
                            onChange={this.handleChange}
                            type="range"
                            min="0"
                            max="20"
                        />
                        <InputField
                            id="tickWidth"
                            label="Tick Width"
                            value={props.tickWidth}
                            onChange={this.handleChange}
                            type="range"
                            min="1"
                            max="10"
                        />
                        <InputField
                            id="tickLength"
                            label="Tick Length"
                            value={props.tickLength}
                            onChange={this.handleChange}
                            type="range"
                            min="1"
                            max="20"
                        />
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default GaugeForm;