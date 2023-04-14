import React, { useState } from "react";
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


    if (ready) {
        return (
            <div className="weather-forecast row mt-4">
                {forecastData.map((forecastDay, index) => {
                    if (index > 0 && index < 6) {
                        return <div key={index} className="col">
                            <ForecastDay data={forecastDay} />
                        </div>
                    }
                })}
            </div>
        )
    } else {
        let key = "6852ob2ff54a88c1bb70te85ce832d00";
        let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;
        axios.get(url).then(getForecastData);
        return null
    }

}