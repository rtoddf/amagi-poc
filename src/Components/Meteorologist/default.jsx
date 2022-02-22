import React from 'react';
import data from '../data/forecast';
import './default.css';

const Meteorologist = ({ site, content }) => {
  console.log(`data['${site}']: `, data[site]);
  const siteData = data[site];
  const meteorologist = content['meteorologist'];
  const metImage = content["metImage"];

  return (
    <div className="meteorologist">
      <div className="flex-container">
        <div className="profile-pic">
          <img src={metImage} alt="" />
        </div>
        <div className="profile-data">
          <div className="heading">Forecast by <span className="title">{siteData.meteorologisttitle}</span></div>
          <div className="name">{siteData.meteorologistname}</div>
          <div className="emblem">
            <img src={siteData.emblemurl} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meteorologist;
