import React, { Component } from "react";
import "./App.css";
import "./carbon.css";
import Gauge from "react-radial-gauge";
import GaugeForm from "./gauge-form";
import { themes } from "./themes";

class App extends Component {

  state = {
    ...{
      size: 200,

      dialWidth: 10,
      tickLength: 5,
      tickWidth: 2,

      tickInterval: 10,

      maximumValue: 100,
      currentValue: 25,
      progressWidth: 5,
      progressRoundedEdge: true,
      downProgressColor: "red",
      progressFontSize: "30",
      progressFont: "Sans-serif",

      needle: true,
      needleBaseSize: 5,

      needleWidth: 2,
      needleSharp: false,
    },
    ...themes.watermelon
  };

  handleGaugeChange = (st) => {
    this.setState(Object.assign(
      {},
      this.state,
      st
    ));
  };

  applyTheme = (theme) => {
    const oldTheme = this.state;
    this.setState({ ...oldTheme, ...theme });
  };

  handleGenerateClick = () => {
    const svgString = new XMLSerializer().serializeToString(document.querySelector(".gauge"));
    const uriPayload = svgString.replace(/"/g, "'");
    this.setState({
      svg: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(uriPayload)
    });
  };

  handleDone = () => {
    this.setState({svg: null});
  };

  renderSVGDownload = () => {
    const { svg } = this.state;
    return <div className={'download'}>
      <div>
        <i>✔</i>
        <p>Generated. Now, right click and select either 'Save As' or 'Open New Tab'.</p>
        <a href={svg}>Right Click and Save Link As</a><br/>
        <button onClick={this.handleDone}>Done</button>
      </div>
    </div>
  };

  render() {
    const { svg } = this.state;
    return (
      <main className="main">
        <div className="app">
          <div className={'showcase'}>
            <header>
              <h1>Gauge Generator</h1>
              <p>Built by <a href={"https://veera.dev"}>Veera</a></p>
            </header>
            <div className="gauge-display">
              <Gauge
                className="gauge"
                {...this.state}
              />
            </div>
            <footer>
              <button onClick={this.handleGenerateClick}>Generate SVG</button>
            </footer>
            <div className={'carbon'}>
              <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7DLK7W&placement=veerasundarcom" id="_carbonads_js"></script>
            </div>
          </div>
          <section className="content">
            <GaugeForm
              onChange={this.handleGaugeChange}
              onThemeChange={this.applyTheme}
              {...this.state}
            />
          </section>
          {
            svg ? this.renderSVGDownload() : null
          }
        </div>
      </main>
    );
  }
}

export default App;
