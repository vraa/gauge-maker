import React, { memo } from "react";
import "./input-field.css";

const InputField = memo(props => {
  const { id, label, type, value } = props;
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input {...props} />
      {type === "range" && <p className="input-value">{value}</p>}
    </div>
  );
});

export default InputField;
