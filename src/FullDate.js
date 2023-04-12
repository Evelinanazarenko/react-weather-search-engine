import React from "react";

export default function FullDate(props) {
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date();
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if (minutes < 10) {
        minutes = `0${minutes}`
    };

    if (hours < 10) {
        hours = `0${hours}`
    }

    return <div>
        {week[day]} {hours}:{minutes}
    </div>
}