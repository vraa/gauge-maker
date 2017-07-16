import React, {Component} from "react";
import "./input-field.css";

class InputField extends Component {
    render() {
        let props = this.props;
        return (
            <div className="input-field">
                <label
                    htmlFor={props.id}
                >
                    {props.label}
                </label>
                <input
                    {...props}
                />
            </div>
        )
    }
}

InputField.PropTypes = {
    type: 'text'
};

export default InputField;