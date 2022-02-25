import React from 'react';
import { getShortDayName, getIcon } from '../utilities/helpers';
import './default.css';

const Forecast = ({ websiteDomain, content }) => {
  const forecast = content['forecast'];
  let weatherDays = [];

  if (forecast) {
    for (let day in forecast) {
      const iconCode = forecast[day].day.iconCode;

      if (iconCode) {
        weatherDays.push(
          <div key={forecast[day].day.daypartName} className="day">
            <div className="name">{getShortDayName(forecast[day].dayOfWeek)}</div>
            <div className="icon">
              <img src={getIcon(websiteDomain, iconCode)} alt="" />
            </div>
            <div className="conditions">{forecast[day].day.wxPhraseLong}</div>
            <div className="temps">
              <span className="temp-max">{forecast[day].temperatureMax}&deg;</span> |&nbsp;
              <span className="temp-min">{forecast[day].temperatureMin}&deg;</span>
            </div>
            <div className="precip-chance">
              <svg className="icon_weather_raindrops | margin-xxs-right margin-xs-right--tablet-desktop icon_sm_tablet-desktop icon_xs" viewBox="0 0 10 13"><path d="M9.56087 4.88063L9.54113 4.854L9.53725 4.84619L7.74984 2.19281L5.96243 4.84623L5.95871 4.85368L5.93884 4.88067C5.65201 5.26909 5.50049 5.73057 5.50049 6.21523C5.50049 7.45557 6.50952 8.4646 7.74979 8.4646C8.99012 8.4646 9.99921 7.45554 9.99921 6.21523C9.99927 5.73053 9.84763 5.26902 9.56089 4.88064L9.56087 4.88063Z" fill="#C4C4C4"></path><path d="M7.75021 9.23068C6.08727 9.23068 4.73442 7.87781 4.73442 6.2149C4.73442 5.56847 4.9358 4.95251 5.31686 4.43298L6.49186 2.68869L4.68048 -0.000183105L0.906442 5.60224C0.313072 6.40974 -0.000488281 7.36715 -0.000488281 8.37182C-0.000488281 10.9529 2.09939 13.0528 4.6805 13.0528C7.12613 13.0528 9.13941 11.1675 9.34402 8.77392C8.88129 9.0632 8.33499 9.23067 7.7502 9.23067L7.75021 9.23068Z" fill="#C4C4C4"></path></svg>
              &nbsp;{forecast[day].day.precipChance}&#37;
            </div>
          </div>
        );
      }
    }
  }

  return (
    <div className="weather-forecast">
      { weatherDays.slice(0,7) }
    </div>
  )
}

export default Forecast;
