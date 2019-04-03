import React, { useState } from "react";
import "./gauge-export.css";

const GaugeExport = () => {
  const [downloadContent, setDownloadContent] = useState(null);

  encodeSVG = svgString => {
    let uriPayload = svgString.replace(/"/g, "'");
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(uriPayload);
  };

  getGaugeContent = () => {
    return new XMLSerializer().serializeToString(
      document.querySelector(".gauge")
    );
  };

  generateSVG = () => {
    setDownloadContent(encodeSVG(getGaugeContent()));
  };

  return (
    <div className="gauge-export">
      {downloadContent ? (
        <div className={"instructions"}>
          <p>
            {" "}
            <i>✓</i>Generated. Now, right Click and Select Save As or Open in
            New Tab
          </p>{" "}
          <a href={downloadContent} target={"_blank"}>
            Download
          </a>
        </div>
      ) : (
        <button className={"cta"} onClick={() => generateSVG()}>
          Generate SVG
        </button>
      )}
    </div>
  );
};

export default GaugeExport;
