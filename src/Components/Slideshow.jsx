import React, { useState, useEffect } from 'react';

import images from './data/slideshow';

const Slideshow = (props) => {
    const [index, setIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(<img src='https://mediaweb.actionnewsjax.com/weather/First_Alert_Radar.jpg' />);

    const slideshowImages = images.map((slide, index) => {
        return (
            <div className="image">
                <img src={slide.url} />
            </div>
        )
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(slideshowImages[Math.floor(Math.random() * slideshowImages.length)]);
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        // <section onClick={() => setIndex((index + 1) % slideshowImages.length)}></section>
        <section>
            {slideshowImages.map((screen, i) => {
                return (
                    <article key={i} hidden={i !== index || undefined}>
                        {currentImage}
                    </article>
                );
            })}
        </section>
    )
}

export default Slideshow;