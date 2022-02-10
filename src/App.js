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
        <div className="slot01">
          <Meteorologist />
        </div>
        <div className="slot02">
          <CurrentConditions />
        </div>
        <div className="slot03">
          <Images />
        </div>
      </div>

      <div className="row02">
        <div className="slot01">
          <Forecast />
        </div>
      </div>

      <div className="row3">
        <div className="slot01">
          <Video />
        </div>
      </div>
    </div>
  );
}

export default App;
