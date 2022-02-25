import React from 'react';
import { metCertLogo, getSiteLogo } from '../utilities/helpers';
import './default.css';

const Meteorologist = ({ websiteDomain, content, siteID }) => {
  const meteorologist = content['meteorologist'];
  const metImage = content["metImage"];

  console.log('websiteDomain: ', websiteDomain)

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
            <div className="site-logo">
              <img
                src={getSiteLogo(websiteDomain, siteID)}
                alt={websiteDomain}
              />
            </div>
            <div className="heading">
              Forecast by <span className="role">{meteorologist.role && (meteorologist.role)}</span>
            </div>
            <div className="name">
              {meteorologist.firstName && (meteorologist.firstName)} {meteorologist.lastName && (meteorologist.lastName)}
            </div>
            {/* you need logic for the cert-logo */}
            <div className="cert-logo">{metCertLogo(meteorologist.education, websiteDomain)}</div>
          </div>
        </div>

      )}
    </div>
  )
}

export default Meteorologist;
