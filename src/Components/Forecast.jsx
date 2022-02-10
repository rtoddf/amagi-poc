import React from 'react';
import forecast from './data/forecast';

const Forecast = (props) => {
    console.log('forecast: ', forecast)

    // this can be done differently
    const weatherDays = (forecast[0].days).map((day, index) => (
        <div className="day">
            <div className="name">{day.dayname}</div>
            <div className="icon">
                <img src={day.icon} alt="" />
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

export default Forecast;