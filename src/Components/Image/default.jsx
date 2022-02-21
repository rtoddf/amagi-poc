import React, { useState, useEffect, useRef } from 'react';
import './default.css';

const Image = ({ site = 'wsb', delay = '5', images, fullScreen=false }) => {
  const [index, setIndex] = useState(0);
  const renderCount = useRef(0);
  const [imageDelay, loopDelay = 0] = delay.split(',').map((d, i) => parseInt(d));

  const slideshowImages = images[site].map((slide, index) => {
    return (
      <>
        <img key={index} src={slide.url} alt="" />
      </>
    )
  });

  useEffect(() => {
    let intervalId;
    const startInterval = () => {
      intervalId = setInterval(() => {
        renderCount.current = (renderCount.current + 1) % slideshowImages.length;
        setIndex(renderCount.current);

        // Add a pause when one full iteration has been completed
        if (renderCount.current === slideshowImages.length - 1) {
          clearInterval(intervalId);
          setTimeout(startInterval, loopDelay*1000);
        }
      }, imageDelay*1000)
    };

    startInterval();

    return () => clearInterval(intervalId);
  }, [slideshowImages.length, imageDelay, loopDelay])

  return (
    <div className={`image-container ${fullScreen ? 'full-screen' : ''}`}>
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

export default Image;
