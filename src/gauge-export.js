import React, {Component} from "react";
import "./gauge-export.css";

class GaugeExport extends Component {

    constructor() {
        super();
        this.state = {
            selected: null,
            downloadContent: null
        };
    }

    encodeSVG = (svgString) => {
        let uriPayload = svgString.replace(/"/g, "'");
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(uriPayload);
    };

    getGaugeContent = () => {
        return new XMLSerializer().serializeToString(document.querySelector(".gauge"));
    };

    handleDownloadSVG = (e) => {
        e.preventDefault();
        this.setState({
            selected: 'svg',
            downloadContent: this.encodeSVG(this.getGaugeContent())
        });
    };

    handleDownloadPNG = (e) => {
        e.preventDefault();
        let svgXML = this.getGaugeContent();
        let imgElm = new Image();
        imgElm.src = this.encodeSVG(svgXML);
        let canvas = document.createElement('canvas');
        canvas.width = this.props.size;
        canvas.height = this.props.size;
        imgElm.onload = () => {
            debugger;
            canvas.getContext('2d').drawImage(imgElm, 0, 0);
            let png = canvas.toDataURL("image/png");
            console.log(png);
            this.setState({
                selected: 'png',
                downloadContent: png
            });
        };
    };

    openContent = (png) => {
        window.open(this.state.downloadContent, 'png');
    };

    render() {
        let downloadElm = null;

        if (this.state.downloadContent) {
            downloadElm = <button className="cta" onClick={this.openContent}>⇓ Save</button>;
        }
        return (
            <div className="gauge-export">
                <button
                    className={this.state.selected === 'svg' ? 'selected' : ''}
                    onClick={this.handleDownloadSVG}>SVG
                </button>
                <button
                    className={this.state.selected === 'png' ? 'selected' : ''}
                    onClick={this.handleDownloadPNG}>PNG
                </button>
                <p>
                    {downloadElm}
                </p>
            </div>
        )
    }
}

export default GaugeExport;