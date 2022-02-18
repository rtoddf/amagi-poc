import React from 'react';
import data from '../data/forecast';
import './default.css';

const Meteorologist = ({ site = 'wsb' }) => {
  console.log(`data['${site}']: `, data[site]);
  const siteData = data[site];

  return (
    <div className="meteorologist">
      <div className="flex-container">
        <div className="profile-pic">
          <img src={siteData.meteorologistimage} alt="" />
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
