import React, { useState, useEffect } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay"

export default function WeatherForecast(props) {
    let [ready, SetReady] = useState(false)
    let [forecastData, SetForecastData] = useState([])

    function getForecastData(response) {
        SetForecastData(response.data.daily)
        SetReady(true)
    }
    function runAxios() {
        let key = `b400ae3b711a616262d18b0ca2cbe78f`
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&cnt=${6}&appid=${key}&units=metric`;
        axios.get(url).then(getForecastData);
        return null
    }

    useEffect(() => {
        SetReady(false);
    }, [props.city])


    if (ready) {
        return (
            <div className="weather-forecast row mt-4">
                {forecastData.map(function (forecastDay, index) {
                    if (index > 0 && index < 6) {
                        return (<div key={index} className="col">
                            <ForecastDay data={forecastDay} />
                        </div>)
                    } return null
                })}
            </div>
        )
    } else {
        runAxios();
    }

}