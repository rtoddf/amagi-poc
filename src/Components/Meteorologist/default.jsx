import React from 'react';
import { metCertLogo } from '../utilities/helpers';
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
            {/* you need logic for the cert-logo */}
            <div className="cert-logo">
              <img src={metCertLogo(meteorologist.education[0].name)} alt="" />
            </div>
          </div>
        </div>
        
      )}
    </div>
  )
}

export default Meteorologist;
