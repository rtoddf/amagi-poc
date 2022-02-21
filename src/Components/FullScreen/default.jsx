import React, { useState, useEffect, useRef } from 'react';
import data from '../data/weather-images';
import './default.css';

const FullScreen = ({ site = 'wsb', delay = 5 }) => {
  const [index, setIndex] = useState(0);
  const renderCount = useRef(0);

  const slideshowImages = data[site].map((slide, index) => {
    return (
      <>
        <img key={index} src={slide.url} alt="" />
      </>
    )
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      renderCount.current = (renderCount.current + 1) % slideshowImages.length;
      setIndex(renderCount.current);
    }, delay*1000)

    return () => clearInterval(intervalId);
  }, [slideshowImages.length, delay])

  return (
    <div className="image-container">
      <section>
        {slideshowImages.map((image, i) => {
          return (
            <article key={i} hidden={i !== index || undefined}>
              {image}
            </article>
          );
        })}
    </section>
    </div>

  )
};

export default FullScreen;
