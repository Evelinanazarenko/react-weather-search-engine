import React from "react";
import "./forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let lon = props.coordinates.longitude
    let lat = props.coordinates.latitude
    let key = "592505440dc3616fd4946f5bb81d820e";
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=daily&appid=${key}`;

    function getForecastData(response) {
        console.log(response.data)
    }
    axios.get(url).then(getForecastData);

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