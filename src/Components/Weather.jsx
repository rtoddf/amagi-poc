import React from 'react';

import weather from './data/weather';

const Weather = (props) => {
    console.log('weather: ', weather)

    // this can be done differently
    const weatherDays = (weather[0].days).map((day, index) => (
        <div className="day">
            <div className="name">{day.dayname}</div>
            <div className="icon">
                <img src={day.icon} />
            </div>
            <div className="conditions">{day.conditions}</div>
            <div className="temps"><span className="high">{day.hightemp}</span> | <span className="low">{day.lowtemp}</span></div>
            <div className="rainchance">{day.rainchance}</div>
        </div>
    ));

    return (
        <div className="weather-forecast">
           { weatherDays }
        </div>
    )
}

export default Weather;