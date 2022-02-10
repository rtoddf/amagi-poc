import React, { useState, useEffect, useRef } from 'react';
import images from './data/slideshow';

const myIndex = {};
// https://dmitripavlutin.com/react-useref-guide/#1-mutable-values

const Images = (props) => {
    const [index, setIndex] = useState(0);

    const slideshowImages = images.map((slide, index) => {
        return (
            <>
                <img key={index} src={slide.url} />
            </>
        )
    });

    myIndex.value = index;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((myIndex.value + 1) % slideshowImages.length);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

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