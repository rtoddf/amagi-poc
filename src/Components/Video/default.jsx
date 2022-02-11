import React, { useState, useEffect, useRef } from 'react';
import './default.css';
import video01 from '../videos/video01.mp4';
import video02 from '../videos/video02.mp4';
import video03 from '../videos/video03.mp4';
import video04 from '../videos/video04.mp4';
import video05 from '../videos/video05.mp4';
import thumbnail from '../images/thumbnail.jpg';

const Video = (props) => {
    const [index, setIndex] = useState(0);
    const renderCount = useRef(0);
    const videos = [video01, video02, video03, video04, video05];

    const slideshowVideos = videos.map((video) => {
        return (
            <video controls='controls' autoPlay="autoPlay" loop preload='none' width='600' muted poster={thumbnail}>
                <source src={ video } type='video/mp4' />
            </video>
        )
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            renderCount.current = (renderCount.current + 1) % slideshowVideos.length;
            setIndex(renderCount.current);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="videos-container">
            <section>
                {slideshowVideos.map((screen, i) => {
                    return (
                        <article key={i} hidden={i !== index || undefined}>
                            {screen}
                        </article>
                    );
                })}
            </section>
        </div>
        
    )
}

export default Video;