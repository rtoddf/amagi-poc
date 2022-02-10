import React from 'react';
import forecast from './data/forecast';

const CurrentConditions = () => {
    return (
        <div className="current-conditions">
            <div className="city">Atlanta, GA</div>
            <div className="flex-container">
                <div className="temp">102&deg;</div>
                <div className="icon">
                    <img src="https://www.wftv.com/pf/resources/images/weather/status-icons/26.png?d=348" alt="" />
                </div>
            </div>
            <div className="conditions">Scattered Thunderstorms</div>
            <div className="feels-like">Feels like 73&deg;</div>
        </div>
    )
}

export default CurrentConditions;