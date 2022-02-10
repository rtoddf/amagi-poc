import React, { useState, useEffect } from 'react';
import images from './data/slideshow';

const Images = (props) => {
    const [index, setIndex] = useState(0);

    const slideshowImages = images.map((slide, index) => {
        return (
            <>
                <img src={slide.url} />
            </>
        )
    });

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImage(slideshowImages[Math.floor(Math.random() * slideshowImages.length)]);
    //     }, 5000)
        
    //     return () => clearInterval(intervalId);
    // }, [])

    return (
        <section>
            <div onClick={() => setIndex((index + 1) % slideshowImages.length)}>change</div>
            {slideshowImages.map((image, i) => {
                return (
                    <article key={i} hidden={i !== index || undefined}>
                        {image}
                    </article>
                );
            })}
        </section>
    )
}

export default Images;