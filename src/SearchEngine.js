import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function SearchEngine(props) {
    let [city, SetCity] = useState(props.defaultCity)
    let [properties, SetProperties] = useState({ ready: false })

    if (properties.ready) {
        return (
            <div className="container mt-5 border rounded pb-4">
                <form>
                    <div className="row mt-3 mb-3">
                        <div className="col-9">
                            <input type="search" placeholder="Type the city.." className="form-control" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <div className="discription-date">
                    <h1>{properties.city}, {properties.country}</h1>
                    <ul>
                        <li>Monday</li>
                        <li>{properties.description}</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-6 d-flex align-items-center first-column-descriprion">
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather discription" />
                        <span>{properties.temp}</span>
                        <div>
                            <a href="/">℃</a>|<a href="/">℉</a>
                        </div>
                    </div>
                    <div className="col-6 second-column-descriprion">
                        <ul>
                            <li>Precipitation: {properties.precipitation}</li>
                            <li>Humidity: {properties.humidity}</li>
                            <li>Wind: {properties.wind}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46fac47dd8b8fa26d1b6852218ad3dfe&units=metric`;
        axios.get(url).then(getWeather)

        function getWeather(response) {
            SetProperties({
                city: response.data.name,
                temp: Math.round(response.data.main.temp),
                country: response.data.sys.country,
                description: response.weather.description,
            })
            console.log(response.data)

        }

        return (
            <div className="container mt-5 border rounded pb-4">
                <form>
                    <div className="row mt-3 mb-3">
                        <div className="col-9">
                            <input type="search" placeholder="Type the city.." className="form-control" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <div className="discription-date">
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }








}