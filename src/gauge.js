import React, {Component} from "react";

const TICK_ID = "tick";

class Gauge extends Component {

    renderDial = (opts) => {
        return (
            <circle
                cx={opts.cX}
                cy={opts.cY}
                r={opts.radius}
                fill="none"
                stroke={opts.dialColor}
                strokeWidth={opts.dialWidth}
            >
            </circle>
        )
    };

    defineTick = (opts) => {
        let tX1 = opts.cX + opts.radius - (opts.dialWidth / 2);
        let tX2 = tX1 - opts.tickLength;

        return (<line
            id={TICK_ID}
            x1={tX1}
            y1={opts.cY}
            x2={tX2}
            y2={opts.cY}
            stroke={opts.tickColor}
            strokeWidth={opts.tickWidth}
        />);
    };

    renderTicks = (opts) => {
        return (
            <use
                href={`#${TICK_ID}`}
            />
        )
    };

    render() {

        let opts = Object.assign({}, this.props);

        let {
            size,
            dialWidth,
        } = opts;

        let cX = size / 2;
        let cY = size / 2;
        let radius = (size - (2 * dialWidth)) / 2;
        let diameter = 2 * radius;
        console.log(radius, diameter);
        opts = Object.assign(opts, {
            cX,
            cY,
            radius,
            diameter
        });

        return (
            <svg
                height={size}
                width={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <defs>
                    {this.defineTick(opts)}
                </defs>
                {this.renderDial(opts)}
                {this.renderTicks(opts)}
            </svg>
        )
    }
}

Gauge.defaultProps = {
    size: 120,
    dialWidth: 10,
    dialColor: "#eee",
    tickLength: 5,
    tickWidth: 2,
    tickColor: "#cacaca"
};

export default Gauge;