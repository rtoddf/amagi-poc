import React from 'react';
import data from '../data/forecast';
import './default.css';

const Forecast = (props) => {
    // this can be done differently
    const weatherDays = (data[0].days).map((day, index) => (
        <div key={index} className="day">
            <div className="name">{day.dayname}</div>
            <div className="icon">
                <img src={day.icon} alt="" />
            </div>
            <div className="conditions">{day.conditions}</div>
            <div className="temps"><span className="high">{day.hightemp}&deg;</span> | <span className="low">{day.lowtemp}&deg;</span></div>
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