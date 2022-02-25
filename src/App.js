import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Meteorologist from './Components/Meteorologist/default';
import CurrentConditions from './Components/CurrentConditions/default';
import Image from './Components/Image/default';
import Forecast from './Components/Forecast/default';

import slideshowImages from './Components/data/slideshow';
import fullScreenImages from './Components/data/weather-images';
import siteProperties from './Components/data/site-properties';
import { getCityState, getWeatherContent } from './Components/utilities/helpers';
import './css/base.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('site') || 'wsb';
  const delay = urlParams.get('delay') || '5';
  const wxGroup = urlParams.get('wxGroup') || 'days';
  const currentDeployment = urlParams.get('d');

  const [content, setContent] = useState({});

  const { siteID, zipCode, websiteDomain, metCollectionAlias } =
        siteProperties[site];

  useEffect(() => {
    (async () => {
      const weatherContent = await getWeatherContent({
        websiteDomain, metCollectionAlias, siteID, zipCode, currentDeployment
      });
      if (weatherContent) {
        setContent(weatherContent);
      }
    })();
  }, []);

  return (
    <Router>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/'>
            <div className='row01'>
              <div className='slot01'>
                <Meteorologist
                  websiteDomain={websiteDomain}
                  siteID={siteID}
                  content={content}
                  metImage={content.metImage}
                />
              </div>
              <div className='slot02'>
                <CurrentConditions websiteDomain={websiteDomain} content={content} cityState={getCityState(siteProperties[site])}/>
              </div>
              <div className='slot03'>
                <Image delay={delay} site={site} wxGroup={wxGroup} images={slideshowImages} />
              </div>
            </div>
            <div className='row02'>
              <div className='slot-full'>
                <Forecast websiteDomain={websiteDomain} content={content} />
              </div>
            </div>
            <div className='row3'>
              <div className='slot01'></div>
            </div>
          </Route>
          <Route path='/fullscreen'>
            <Image
              delay={delay}
              site={site}
              wxGroup={wxGroup}
              images={fullScreenImages}
              fullScreen={true}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
