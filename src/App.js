import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Meteorologist from './Components/Meteorologist/default';
import CurrentConditions from './Components/CurrentConditions/default';
import Image from './Components/Image/default';
import Forecast from './Components/Forecast/default';

import slideshowImages from './Components/data/slideshow';
import fullScreenImages from './Components/data/weather-images';
import siteProperties from './Components/data/site-properties';
import './css/base.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('site') || 'wsb';
  const delay = urlParams.get('delay') || '5';

  const [content, setContent] = useState({});

  const { siteID, zipCode, websiteDomain, metCollectionAlias, resizerKey } =
    siteProperties[site];

  useEffect(() => {
    (async () => {
      try {
        const { data: weatherContent } = await axios({
          url: `${websiteDomain}/pf/api/v3/content/fetch/weather-api?query={"metCollectionAlias":"${metCollectionAlias}","website":"${siteID}","zipCode":"${zipCode}"}&d=359&_website=${siteID}`,
          method: 'GET',
        });

        const metImage = weatherContent['metImage']
          ? weatherContent['metImage'].match(/https:\/\/(.+)/)[1]
          : '';

        weatherContent[
          'resizedMetImage'
        ] = `https://cmg-${siteID}-prod.cdn.arcpublishing.com/resizer/${resizerKey}=/fit-in/158x0/filters:quality(70):fill(white):background_color(white)/${metImage}`;

        setContent(weatherContent);

        // console.log('content: ', content);
      } catch (err) {
        debugger;
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
                  site={site}
                  content={content}
                  metImage={content.metImage}
                />
              </div>
              <div className='slot02'>
                <CurrentConditions site={site} content={content} />
              </div>
              <div className='slot03'>
                <Image delay={delay} site={site} images={slideshowImages} />
              </div>
            </div>
            <div className='row02'>
              <div className='slot01'>
                <Forecast site={site} />
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
