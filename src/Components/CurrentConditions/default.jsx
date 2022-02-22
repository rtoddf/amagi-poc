import React from 'react';
import './default.css';

const CurrentConditions = ({ websiteDomain, content }) => {
    const current = content['current'];
    // need the correct url with site for icon
    return (
        <div className="current-conditions">
            {current && (
                <>
                    <div className="city">
                        {current.obs_name && (current.obs_name)}
                    </div>
                    <div className="flex-container">
                        <div className="temp">
                            {current.temp && (current.temp)}&deg;
                        </div>
                        <div className="icon">
                            <img src={`${websiteDomain}/pf/resources/images/weather/status-icons/${current.wx_icon}.png?d=348`} alt="" />
                        </div>
                    </div>
                    <div className="conditions">
                        {current.wx_phrase && (current.wx_phrase)}
                    </div>
                    <div className="feels-like">
                        Feels like {current.feels_like && (current.feels_like)}&deg;
                    </div>
                </>
            )}
        </div>
    )
}

export default CurrentConditions;
