import React, { useState, useEffect, useRef } from 'react';
import data from './data/slideshow';

const Images = (props) => {
    const [index, setIndex] = useState(0);
    const renderCount = useRef(0);

    const slideshowImages = data.map((slide, index) => {
        return (
            <>
                <img key={index} src={slide.url} />
            </>
        )
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            renderCount.current = (renderCount.current + 1) % slideshowImages.length;
            setIndex(renderCount.current);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

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
}

export default Images;