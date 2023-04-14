import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { MagnifyingGlass } from "react-loader-spinner";

export default function SearchEngine(props) {
    let [city, SetCity] = useState(props.defaultCity)
    const [properties, SetProperties] = useState({ ready: false })
    let [temperature, SetTemperature] = useState("")
    let [localCoords, SetLocalCoords] = useState({})


    function getData() {
        let key = `592505440dc3616fd4946f5bb81d820e`
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        axios.get(url).then(getWeather)
    }


    function getWeather(response) {
        const resp = response.data;
        SetProperties({
            coord: response.data.coord,
            cityName: resp.name,
            temp: Math.round(resp.main.temp),
            country: resp.sys.country,
            description: resp.weather[0].description,
            humidity: resp.main.humidity,
            wind: resp.wind.speed,
            icon: resp.weather[0].icon,
            ready: true,
        });
        SetTemperature(Math.round(resp.main.temp))
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
        let key = `592505440dc3616fd4946f5bb81d820e`
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${localCoords.latitude}&lon=${localCoords.longitude}&appid=${key}&units=metric`;
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
                <WeatherForecast coordinates={properties.coord} city={properties.cityName} />
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
                    <h1><MagnifyingGlass
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor='#c0efff'
                        color='#e15b64'
                    />Searching for a city...</h1>
                </div>
            </div>
        )
    }
}









