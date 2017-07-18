import React, {Component} from "react";
import "./input-field.css";

class InputField extends Component {
    render() {
        let props = this.props;
        let inputValElm = null;
        if(props.type === 'range') {
            inputValElm = <p className="input-value">{props.value}</p>;
        }
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
                {inputValElm}
            </div>
        )
    }
}

InputField.PropTypes = {
    type: 'text'
};

export default InputField;