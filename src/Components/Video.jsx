import React, { useState, useEffect } from 'react';
import video01 from './videos/video01.mp4';
import video02 from './videos/video02.mp4';
import video03 from './videos/video03.mp4';
import video04 from './videos/video04.mp4';
import thumbnail from './images/thumbnail.jpg';

import images from './data/slideshow';

const Video = (props) => {
    const [index, setIndex] = useState(0);
    const videos = [video01, video02, video03, video04]

    const slideshowImages = videos.map((video) => {
        return (
            <video controls='controls' autoPlay="autoPlay" preload='none' width='600' muted>
                <source src={ video } type='video/mp4' />
            </video>
        )
    });

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         console.log('index before: ', intervalId)
    //         setIndex((index + 1) % slideshowImages.length)
    //         console.log('index after: ', index)
    //         // setCurrentImage(slideshowImages[Math.floor(Math.random() * slideshowImages.length)]);
    //         // id="videoPoc" onClick={() => setIndex((index + 1) % slideshowImages.length)}
    //     }, 5000)

    //     return () => clearInterval(intervalId);
    // }, [])

    return (
        <section>
            <div onClick={() => setIndex((index + 1) % slideshowImages.length)}>change</div>
            {slideshowImages.map((screen, i) => {
                return (
                    <article key={i} hidden={i !== index || undefined}>
                        {screen}
                    </article>
                );
            })}
        </section>
    )
}

export default Video;