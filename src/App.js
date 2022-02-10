import './css/base.css';
import Meteorologist from './Components/Meteorologist';
import CurrentConditions from './Components/CurrentConditions';
import Images from './Components/Images';
import Video from './Components/Video';
import Forecast from './Components/Forecast';

function App() {
  return (
    <div className="wrapper">
      <div className="row01">
        <div className="meteorologist">
          <Meteorologist />
        </div>
        <div className="current-conditions">
          <CurrentConditions />
        </div>
        <Images />
      </div>

      <div className="bottom">
        <div className="forecast">
          <Forecast />
        </div>
      </div>

      <div className="niddle">
        <div className="slideshows">
          <Video />
          
        </div>
      </div>
    </div>
  );
}

export default App;
