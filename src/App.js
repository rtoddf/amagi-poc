import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Meteorologist from './Components/Meteorologist/default';
import Image from './Components/Image/default';
import Forecast from './Components/Forecast/default';

import slideshowImages from './Components/data/slideshow';
import fullScreenImages from './Components/data/weather-images';
import './css/base.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('site') || undefined;
  const delay = urlParams.get('delay') || undefined;

  return (
    <Router>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/'>
            <div className='row01'>
              <div className='slot01'>
                <Meteorologist site={site} />
              </div>
              <div className='slot02'>
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
