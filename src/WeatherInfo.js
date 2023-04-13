import React, { useState } from "react";
import FullDate from "./FullDate";
import UnitConvertation from "./UnitConvertation";

export default function WeatherInfo(props) {
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
                <UnitConvertation temp={props.temp} />
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