import React, {PureComponent} from "react";
import "./input-field.css";

class InputField extends PureComponent {
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

export default InputField;