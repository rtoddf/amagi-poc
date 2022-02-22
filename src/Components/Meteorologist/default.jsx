import React from 'react';
import './default.css';

const Meteorologist = ({ site, content }) => {
  const meteorologist = content['meteorologist'];
  const metImage = content["metImage"];

  console.log('meteorologist: ', meteorologist)

  return (
    <div className="meteorologist">
      {meteorologist && (
        <div className="flex-container">
          <div className="profile-pic">
            <img 
              src={metImage && (metImage)} 
              alt={meteorologist.byline && (meteorologist.byline)} 
            />
          </div>
          <div className="profile-data">
            <div className="heading">
              Forecast by <span className="role">{meteorologist.role && (meteorologist.role)}</span>
            </div>
            <div className="name">
              {meteorologist.firstName && (meteorologist.firstName)} {meteorologist.lastName && (meteorologist.lastName)}
            </div>
            {/* you need logic for the emblem */}
            <div className="emblem">
              <img src="https://www.wsbtv.com/pf/resources/images/weather/meteorologist-cert/logo_AMS_Cert.png?d=348" alt="" />
            </div>
          </div>
        </div>
        
      )}
    </div>
  )
}

export default Meteorologist;
