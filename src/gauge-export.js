import React, {Component} from "react";
import "./gauge-export.css";

class GaugeExport extends Component {

    encodeSVG = (svgString) => {
        let uriPayload = svgString.replace(/"/g, "'");
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(uriPayload);
    };

    handleDownload = (e) => {
        e.preventDefault();
        let svgElm = document.querySelector(".gauge");
        let svgXML = new XMLSerializer().serializeToString(svgElm);
        window.open(this.encodeSVG(svgXML));

    };

    render() {
        return (
            <div className="gauge-export">
                <button onClick={this.handleDownload}>Download</button>
            </div>
        )
    }
}

export default GaugeExport;