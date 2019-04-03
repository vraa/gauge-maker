import React, { memo } from "react";
import InputField from "./components/input-field";
import InputColor from "./components/input-color";
import "./gauge-form.css";
import Themes from "./themes";

const VARIANTS = {
  1: {
    size: 160,
    dialWidth: 5,
    progressWidth: 10,
    needleSharp: true,
    progressFontSize: "25",
    needleBaseSize: 10,
    needleWidth: 10
  },
  2: {
    size: 200,
    dialWidth: 10,
    progressWidth: 7,
    needleSharp: true,
    progressFontSize: "35",
    needleBaseSize: 5,
    needleWidth: 5
  },
  3: {
    size: 250,
    dialWidth: 20,
    progressWidth: 7,
    needleSharp: true,
    progressFontSize: "35",
    needleBaseSize: 15,
    needleWidth: 15
  }
};

const GaugeForm = memo(props => {
  const handleChange = e => {
    let st = {};
    st[e.target.id] = e.target.value;
    props.onChange(st);
  };

  const handleColorChange = (id, color) => {
    let st = {};
    st[id] = color.hex;
    props.onChange(st);
  };

  const handleCheckChange = e => {
    let st = {};
    st[e.target.id] = e.target.checked;
    props.onChange(st);
  };

  const handleVariantChange = e => {
    e.preventDefault();
    const variant = e.target.value;
    props.onChange(VARIANTS[variant]);
  };

  return (
    <form className="gauge-form">
      <div className={"theme-and-variant"}>
        <Themes onChange={props.onThemeChange} />
        <div className={"variants"}>
          <button value={1} onClick={handleVariantChange}>
            Variant 1
          </button>
          <button value={2} onClick={handleVariantChange}>
            Variant 2
          </button>
          <button value={3} onClick={handleVariantChange}>
            Variant 3
          </button>
        </div>
      </div>
      <div className={"field-group colors"}>
        <InputColor
          id="dialColor"
          label="Dial"
          value={props.dialColor}
          onChange={handleColorChange}
        />
        <InputColor
          id="progressColor"
          label="Progress"
          value={props.progressColor}
          onChange={handleColorChange}
        />
        <InputColor
          id="needleColor"
          label="Needle"
          value={props.needleColor}
          onChange={handleColorChange}
        />
        <InputColor
          id="needleBaseColor"
          label="Base"
          value={props.needleBaseColor}
          onChange={handleColorChange}
        />
        <InputColor
          id="tickColor"
          label="Tick"
          value={props.tickColor}
          onChange={handleColorChange}
        />
      </div>
      <div className={"sliders row-1"}>
        <div className={"field-group values"}>
          <h3>Font</h3>
          <InputField
            id="progressFontSize"
            label="Size"
            value={props.progressFontSize}
            onChange={handleChange}
            type="range"
            min="20"
            max="80"
          />
          <div className={"select-field"}>
            <label>Type</label>
            <select
              id="progressFont"
              onChange={handleChange}
              value={props.progressFont}
            >
              <option value={"serif"}>Serif</option>
              <option value={"Sans-serif"}>Sans-serif</option>
              <option value={"Courier"}>Courier</option>
            </select>
          </div>
        </div>
        <div className="field-group gauge">
          <h3>Gauge</h3>
          <InputField
            id="size"
            label="Size"
            onChange={handleChange}
            type="range"
            min="150"
            max="300"
            value={props.size}
          />
          <InputField
            id="currentValue"
            label="Value"
            value={props.currentValue}
            onChange={handleChange}
            type="range"
            min="0"
            max="100"
          />
        </div>
      </div>
      <div className={"sliders row-2"}>
        <div className="field-group dial">
          <h3>Dial</h3>
          <InputField
            id="dialWidth"
            label="Width"
            value={props.dialWidth}
            onChange={handleChange}
            type="range"
            min="0"
            max="20"
          />
          <InputField
            id="progressWidth"
            label="Width"
            value={props.progressWidth}
            onChange={handleChange}
            type="range"
            min="1"
            max="20"
          />
        </div>
        <div className="field-group needle">
          <h3>Needle</h3>
          <InputField
            id="needleWidth"
            label="Width"
            value={props.needleWidth}
            onChange={handleChange}
            type="range"
            min="0"
            max="20"
          />
          <InputField
            id="needleBaseSize"
            label="Base Size"
            value={props.needleBaseSize}
            onChange={handleChange}
            type="range"
            min="0"
            max="20"
          />
          <InputField
            id="needleSharp"
            label="Sharp Needle?"
            checked={props.needleSharp}
            onChange={handleCheckChange}
            type="checkbox"
          />
        </div>
        <div className="field-group ticks">
          <h3>Tick</h3>
          <InputField
            id="tickWidth"
            label="Width"
            value={props.tickWidth}
            onChange={handleChange}
            type="range"
            min="1"
            max="10"
          />
          <InputField
            id="tickLength"
            label="Length"
            value={props.tickLength}
            onChange={handleChange}
            type="range"
            min="1"
            max="20"
          />
        </div>
      </div>
    </form>
  );
});

export default GaugeForm;
