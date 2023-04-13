import React from "react";
import "./forecast.css"

export default function WeatherForecast(props) {
    return (
        <div className="weather-forecast row mt-4">
            <div className="col">
                <p className="m-0">Mon</p>
                <img src={props.icon} alt="weather discription" />
                <div>
                    <span className="forecast-temp-max">19°</span>
                    <span className="forecast-temp-min">10°</span>
                </div>
            </div>
        </div>
    )
}