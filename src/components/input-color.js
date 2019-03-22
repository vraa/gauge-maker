import React, {Component} from "react";
import {SketchPicker} from "react-color";
import "./input-color.css";

class InputColor extends Component {

    state = {
        pickerOpen: false
    };

    handleChange = (color) => {
        this.props.onChange(this.props.id, color);
    };

    togglePicker = (e) => {
        e.preventDefault();
        this.setState({
            pickerOpen: !this.state.pickerOpen
        })
    };

    closePicker = (e) => {
        e.preventDefault();
        this.setState({
            pickerOpen: false
        });
    };

    render() {
        let props = this.props;
        let pickerClass = this.state.pickerOpen ? 'open' : 'close';
        let closePickerElm = null;

        if (this.state.pickerOpen) {
            closePickerElm = (
                <button
                    className="close-picker"
                    onClick={this.closePicker}
                >✕</button>
            );
        }
        return (
            <div className="input-field input-color">
                <label>{props.label}</label>
                <button
                    style={{
                        backgroundColor: `${props.value}`
                    }}
                    onClick={this.togglePicker}
                />
                {closePickerElm}
                <div className={`color-picker ${pickerClass}`}>
                    <SketchPicker
                        color={props.value}
                        onChange={this.handleChange}
                        pointer={null}
                    />
                </div>
                <p className="input-value">{props.value}</p>
            </div>
        )

    }
}

export default InputColor;