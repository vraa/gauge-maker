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
        canvas.width = this.props.size || 300;
        canvas.height = this.props.size || 300;
        imgElm.onload = () => {
            canvas.getContext('2d').drawImage(imgElm, 0, 0);
            let png = canvas.toDataURL("image/png");
            
            this.setState({
                selected: 'png',
                downloadContent: png
            });
        };
    };

    openContent = (e) => {
        e.preventDefault();
        let win = window.open();
        win.document.write('<iframe src="' + this.state.downloadContent + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
    };

    render() {
        let downloadElm = null;
        console.log(this.state.downloadContent);
        if (this.state.downloadContent) {
            downloadElm = <button className="cta" onClick={this.openContent.bind(this)}>Download</button>;
        }
        return (
            <div className="gauge-export">
                <button
                    className={this.state.selected === 'svg' ? 'selected' : ''}
                    onClick={this.handleDownloadSVG.bind(this)}>SVG
                </button>
                <button
                    className={this.state.selected === 'png' ? 'selected' : ''}
                    onClick={this.handleDownloadPNG.bind(this)}>PNG
                </button>
                <p>
                    {downloadElm}
                </p>
            </div>
        )
    }
}

export default GaugeExport;