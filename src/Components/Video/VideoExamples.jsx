import React from 'react';
import thumbnail from './images/thumbnail.jpg';
import myVideo from './videos/video_file_1920x1080-5400-v4-01.mp4';
import myStream from './videos/live.m3u8';

import slideshow from '../data/slideshow';

const VideoExamples = (props) => {
    console.log('slideshow: ', slideshow)

    return (
        <>
            <video controls='controls' preload='none' width='600' poster={ thumbnail }>
                {/* <source src={ myVideo } type='video/mp4' /> */}
                <source src='https://d3nzocdfkx2ybv.cloudfront.net/in/cmg-wsbtv2tv-hls-v3/live.m3u8' type='application/vnd.apple.mpegurl' />
                {/* <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' /> */}
                {/* <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' /> */}
                {/* <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srclang="en" default>
                </track>
                <track kind="subtitles" label="Deutsche Untertitel" src="subtitles_de.vtt" srclang="de">
                </track> */}
                <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
        </>
    )
}

export default VideoExamples;