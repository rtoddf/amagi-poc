import React, { useState, useEffect } from 'react';
import images from './data/slideshow';

const myIndex = {};

const Images = (props) => {
    const [index, setIndex] = useState(0);

    const slideshowImages = images.map((slide, index) => {
        return (
            <>
                <img src={slide.url} />
            </>
        )
    });

    myIndex.value = index;

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('myIndex.value before: ', myIndex.value)
            setIndex(myIndex.value + 1);
            console.log('myIndex.value after: ', myIndex.value)
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