import React, { memo, useState } from "react";
import { SketchPicker } from "react-color";
import "./input-color.css";

const InputColor = memo(({ id, label, value, onChange }) => {
  const [pickerOpen, setPickerOpen] = useState(false);

  const handlePickerButtonClick = e => {
    e.preventDefault();
    setPickerOpen(!pickerOpen);
  };

  const handleClosePickerClick = e => {
    e.preventDefault();
    setPickerOpen(false);
  };

  const handlePickerChange = value => {
    onChange(id, value);
  };

  return (
    <div className={"input-field input-color"}>
      <label>{label}</label>
      <button
        style={{
          backgroundColor: `${value}`
        }}
        onClick={handlePickerButtonClick}
      />
      {pickerOpen ? (
        <React.Fragment>
          <button className="close-picker" onClick={handleClosePickerClick}>
            ✕
          </button>
          <div className={`color-picker open`}>
            <SketchPicker
              color={value}
              onChange={handlePickerChange}
              pointer={null}
            />
          </div>
        </React.Fragment>
      ) : null}
      <p className="input-value">{value}</p>
    </div>
  );
});

export default InputColor;
