import React from "react";

export default function ForecastDay(props) {
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function maxTemperature() {
        return `${Math.round(props.data.temp.max)}`
    }

    function minTemperature() {
        return `${Math.round(props.data.temp.min)}`
    }

    function day() {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay()
        return `${week[day]}`
    }

    function icon() {
        return `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
    }


    return (
        <div>
            <p className="m-0">{day()}</p>
            <img src={icon()} alt="weather discription" />
            <div>
                <span className="forecast-temp-max">{maxTemperature()}° </span>
                <span className="forecast-temp-min">{minTemperature()}°</span>
            </div>
        </div>
    )
}