import './css/base.css';
import Images from './Components/Images';
import Video from './Components/Video';
import Forecast from './Components/Forecast';

function App() {
  return (
    <>
      <div className="slideshows">
        <Video />
        <Images />
      </div>
      <div className="forecast">
        <Forecast />
      </div>
    </>
  );
}

export default App;
