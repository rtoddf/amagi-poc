import React from 'react';
import { padIconCode, getCityState } from '../utilities/helpers';
import './default.css';

const CurrentConditions = ({ websiteDomain, content }) => {
  const current = content['current'];
  const iconCode = padIconCode(current && current.wx_icon);
  // need the correct url with site for icon
  return (
    <div className="current-conditions">
      {current && (
        <>
          <div className="city">
            {getCityState(websiteDomain)}
          </div>
          <div className="flex-container">
            <div className="temp">
              {current.temp && (current.temp)}&deg;
            </div>
            <div className="icon">
              <img src={`${websiteDomain}/pf/resources/images/weather/status-icons/${iconCode}.png?d=348`} alt="" />
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
