import React from "react";
import useGeolocation from "react-navigator-geolocation";

export default function LocalWeather() {
    return (
        <div className="col-2">
            <input type="submit" value="Local" className="btn btn-green w-100" />
        </div>
    )
}