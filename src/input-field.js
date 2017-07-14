import React, {Component} from "react";

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
                    id={props.id}
                    type={props.type}
                    onChange={props.onChange}
                    value={props.value}
                />
            </div>
        )
    }
}

InputField.PropTypes = {
    type: 'text'
};

export default InputField;