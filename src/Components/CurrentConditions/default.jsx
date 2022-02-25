import React from 'react';
import { getIcon } from '../utilities/helpers';
import './default.css';

const CurrentConditions = ({ websiteDomain, content, cityState }) => {
  const current = content['current'];
  // need the correct url with site for icon
  return (
    <div className="current-conditions">
      {current && (
        <>
          <div className="city">
            {cityState}
          </div>
          <div className="flex-container">
            <div className="temp">
              {current.temp && (current.temp)}&deg;
            </div>
            <div className="icon">
              <img src={current && getIcon(websiteDomain, current.wx_icon)} alt="" />
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
