import './css/base.css';
import Slideshow from './Components/Slideshow';
import Video from './Components/Video';
import Weather from './Components/Weather';

function App() {
  return (
    <>
      <div className="root">
        <Video />
      </div>
      <div className="root">
        <Slideshow />
      </div>
    </>
  );
}

export default App;
