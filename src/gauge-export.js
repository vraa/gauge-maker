import React, { Component } from "react";
import "./gauge-export.css";

class GaugeExport extends Component {

  state = {
    downloadContent: null
  };

  encodeSVG = (svgString) => {
    let uriPayload = svgString.replace(/"/g, "'");
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(uriPayload);
  };

  getGaugeContent = () => {
    return new XMLSerializer().serializeToString(document.querySelector(".gauge"));
  };

  generateSVG = () => {
    this.setState({
      downloadContent: this.encodeSVG(this.getGaugeContent())
    })
  };

  render() {
    const { downloadContent } = this.state;
    return (
      <div className="gauge-export">
        {
          downloadContent ? <div className={'instructions'}><p> <i>✓</i>Generated. Now, right Click and Select Save As or Open in New Tab</p> <a href={downloadContent}
                                                                                             target={"_blank"}>Download</a>
            </div> :
            <button className={'cta'} onClick={this.generateSVG}>Generate SVG</button>
        }
      </div>
    )
  }
}

export default GaugeExport;