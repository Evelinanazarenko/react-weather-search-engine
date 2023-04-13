import React, { useState } from "react";

export default function UnitConvertation(props) {
    const [unit, SetUnit] = useState("metric");
    let farenh = Math.round((props.temp * 9) / 5 + 32);

    function changeUnitFar(event) {
        event.preventDefault();
        SetUnit("imperial")
    }

    function changeUnitCelsius(event) {
        event.preventDefault();
        SetUnit("metric")
    }

    if (unit === "metric") {
        return (
            <div className="d-flex units">
                <span>{props.temp}</span>
                <div>
                    ℃ |<a href="/" onClick={changeUnitFar}>℉</a>
                </div>
            </div>
        )

    } else {
        return (
            <div className="d-flex units">
                <span>{farenh}</span>
                <div>
                    <a href="/" onClick={changeUnitCelsius}>℃ </a>|℉
                </div>
            </div>
        )
    }
}