import React, { useEffect, useState } from "react";

const ProgressBar = ({ minTry, maxTry }) => {
    const [minValueStyle, setMinValueStyle] = useState({ width: "0%" });
    useEffect(() => {
        setMinValueStyle({ width: `${minTry}%` });
    }, [minTry]);

    const [maxValueStyle, setMaxValueStyle] = useState({ width: "0%" });
    useEffect(() => {
        setMaxValueStyle({ width: `${100 - maxTry}%` });
    }, [maxTry]);

    return (
        <div className="progression-wrapper">
            <div className="min-value" style={minValueStyle}></div>
            <div></div>
            <div className="max-value" style={maxValueStyle}></div>
        </div>
    );
};

export default ProgressBar;
