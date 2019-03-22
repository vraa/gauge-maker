import React, {Component} from "react";
import "./themes.css";

const DEFAULT_THEME = {
    tickColor: "#cacaca",
    needleColor: '#8a8a8a',
    dialColor: "#eee",
    needleBaseColor: '#9d9d9d',
    progressColor: "#3d3d3d",
};

const themes = {
    regular: DEFAULT_THEME,
    watermelon: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#FFC0A9',
        progressColor: '#FF8598',
        tickColor: '#FF8598',
        needleColor: '#C9D787',
        needleBaseColor: '#7D8A2E'
    }),
    flat: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#ECF0F1',
        progressColor: '#3498DB',
        tickColor: '#3498DB',
        needleColor: '#2980B9',
        needleBaseColor: '#E74C3C'
    }),
    quietCry: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#DCF8F1',
        progressColor: '#92CDCF',
        tickColor: '#3498DB',
        needleColor: '#92CDCF',
        needleBaseColor: '#92CDCF'
    }),
    gardenPool: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#e2f5bc',
        progressColor: '#95C92C',
        tickColor: '#95C92C',
        needleColor: '#7FC7BD',
        needleBaseColor: '#4CB6C2'
    }),
    techOffice: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#cdc6ba',
        progressColor: '#766d57',
        tickColor: '#cdc6ba',
        needleColor: '#ba0c1f',
        needleBaseColor: '#ba0c1f'
    }),
    seaWolf: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#D9CB9E',
        progressColor: '#DC3522',
        tickColor: '#D9CB9E',
        needleColor: '#374140',
        needleBaseColor: '#1E1E20'
    }),
    neutralBlue: Object.assign({}, DEFAULT_THEME, {
        dialColor: '#aac4cf',
        progressColor: '#193441',
        tickColor: '#3498DB',
        needleColor: '#AAB29A',
        needleBaseColor: '#91AA9D'
    }),

};

class Themes extends Component {

    applyTheme = (e) => {
        this.props.onChange(themes[e.target.value]);
    };

    render() {
        let themeNames = Object.keys(themes);
        return (
            <div className="themes">
                <h2>Theme:</h2>
                <select onChange={this.applyTheme}>
                    {
                        themeNames.map((theme) => {
                            return <option key={theme} value={theme}>{theme}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export {themes};
export default Themes;