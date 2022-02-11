import Meteorologist from './Components/Meteorologist/default';
import Image from './Components/Image/default';
import Video from './Components/Video/default';
import Stream from './Components/Stream/default';
import Forecast from './Components/Forecast/default';
import './css/base.css';

function App() {
  return (
    <div className="wrapper">
      <div className="row01">
        <div className="slot01">
          <Stream />
          {/* <Meteorologist /> */}
        </div>
        <div className="slot02">
          <Image />
        </div>
        <div className="slot03">
          <Video />
        </div>
      </div>

      <div className="row02">
        <div className="slot01">
          <Forecast />
        </div>
      </div>

      <div className="row3">
        <div className="slot01">
          
        </div>
      </div>
    </div>
  );
}

export default App;
