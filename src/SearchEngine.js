import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function SearchEngine(props) {
    let [city, SetCity] = useState(props.defaultCity)
    const [properties, SetProperties] = useState({ ready: false })
    let [temperature, SetTemperature] = useState("")
    let [localCoords, SetLocalCoords] = useState({})


    function getData() {
        let key = `6852ob2ff54a88c1bb70te85ce832d00`
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
        axios.get(url).then(getWeather)
    }


    function getWeather(response) {
        const resp = response.data;
        SetProperties({
            coord: response.data.coordinates,
            cityName: resp.city,
            temp: Math.round(resp.temperature.current),
            country: resp.country,
            description: resp.condition.description,
            humidity: resp.temperature.humidity,
            wind: resp.wind.speed,
            icon: resp.condition.icon_url,
            ready: true,
        });
        SetTemperature(Math.round(resp.temperature.current))
    }

    function cityChange(event) {
        SetCity(event.target.value)
    }

    function changeData(event) {
        event.preventDefault();
        SetProperties({ ready: false });
        getData()
    }


    function getLocalData() {
        let key = `6852ob2ff54a88c1bb70te85ce832d00`
        let url = `https://api.shecodes.io/weather/v1/current?lon=${localCoords.longitude}&lat=${localCoords.latitude}&key=${key}&units=metric`;
        axios.get(url).then(getWeather)
    }

    function getLocalCoordinates(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(function (position) {
            SetLocalCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        });
        getLocalData()
    }

    if (properties.ready) {
        return (
            <div className="container mt-5 border rounded pb-4">
                <form onSubmit={changeData}>
                    <div className="row mt-3 mb-3">
                        <div className="col-8">
                            <input type="search" placeholder="Type the city.." onChange={cityChange} className="form-control" />
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Local" onClick={getLocalCoordinates} className="btn btn-green w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={properties} temp={temperature} />
                <WeatherForecast icon={properties.icon} city={properties.cityName} />
            </div>
        )
    } else {
        getData()

        return (
            <div className="container mt-5 border rounded pb-4">
                <form>
                    <div className="row mt-3 mb-3">
                        <div className="col-8">
                            <input type="search" placeholder="Type the city.." className="form-control" />
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div><div className="col-2">
                            <input type="submit" value="Local" className="btn btn-green w-100" />
                        </div>
                    </div>
                </form>
                <div className="discription-date">
                    <h1>Searching for a city...</h1>
                </div>
            </div>
        )
    }
}









