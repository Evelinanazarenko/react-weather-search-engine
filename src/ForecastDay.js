import React from "react";

export default function ForecastDay(props) {
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function maxTemperature() {
        return `${Math.round(props.data.temperature.maximum)}`
    }

    function minTemperature() {
        return `${Math.round(props.data.temperature.minimum)}`
    }

    function day() {
        let date = new Date(props.data.time * 1000)
        let day = date.getDay()
        return `${week[day]}`
    }

    return (
        <div>
            <p className="m-0">{day()}</p>
            <img src={props.data.condition.icon_url} alt="weather discription" />
            <div>
                <span className="forecast-temp-max">{maxTemperature()}° </span>
                <span className="forecast-temp-min">{minTemperature()}°</span>
            </div>
        </div>
    )
}