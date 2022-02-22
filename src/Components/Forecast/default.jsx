import React from 'react';
import { getShortDayName } from '../utilities/helpers';
import './default.css';

const Forecast = ({ site = 'wsb', content }) => {
    const forecast = content['forecast'];
    console.log('forecast: ', forecast)
    let weatherDays = [];

    if(forecast) {
        for (let key in forecast) {
            weatherDays.push(
                <div className="day">
                    <div className="name">{getShortDayName(forecast[key].dayOfWeek)}</div>
                    <div className="icon">
                        <img src={`https://www.wftv.com/pf/resources/images/weather/status-icons/${forecast[key].day.iconCode}.png?d=348`} alt="" />
                    </div>
                    <div className="conditions">{forecast[key].day.wxPhraseLong}</div>
                    <div className="temps">
                        <span className="temp-max">{forecast[key].calendarDayTemperatureMax}&deg;</span> |&nbsp;
                        <span className="temp-min">{forecast[key].calendarDayTemperatureMin}&deg;</span>
                    </div>
                    <div className="precip-chance">{forecast[key].day.precipChance}</div>
                </div>
            )
        }
    }

    return (
        <div className="weather-forecast">
           { weatherDays }
        </div>
    )
}

export default Forecast;
