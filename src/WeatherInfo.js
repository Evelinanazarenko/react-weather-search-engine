import React, { useState } from "react";
import FullDate from "./FullDate";

export default function WeatherInfo(props) {
    let [temperature, SetTemperature] = useState(props.temp);

    function changeUnitFar(event) {
        event.preventDefault();
        SetTemperature(Math.round((props.temp * 9) / 5 + 32))
    }
    function changeUnitCelsius(event) {
        event.preventDefault();
        SetTemperature(props.temp)
    }


    return <div>
        <div className="discription-date">
            <h1>{props.data.cityName}, {props.data.country}</h1>
            <ul>
                <li><FullDate /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
        </div>
        <div className="row">
            <div className="col-6 d-flex align-items-center first-column-descriprion">
                <img src={props.data.icon} alt="weather discription" />
                <span>{temperature}</span>
                <div>
                    <a href="/" onClick={changeUnitCelsius}>℃</a>|<a href="/" onClick={changeUnitFar}>℉</a>
                </div>
            </div>
            <div className="col-6 second-column-descriprion">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind}km/h</li>
                </ul>
            </div>
        </div>
    </div>
}