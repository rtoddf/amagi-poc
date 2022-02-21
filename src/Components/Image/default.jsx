import React, { useState, useEffect, useRef } from 'react';
import './default.css';

const Image = ({ site = 'wsb', delay = 5, images, fullScreen=false }) => {
  const [index, setIndex] = useState(0);
  const renderCount = useRef(0);

  const slideshowImages = images[site].map((slide, index) => {
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
