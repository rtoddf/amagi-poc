import React from 'react';

import './default.css';
import thumbnail from '../../images/thumbnail.jpg';

// this stream works in Safari, but not in Chrome
// Leaving this component for later - not being used for first POC

const Stream = () => {
    return (
        <div className="stream-container">
            <section>
                <article>
                    <video controls='controls' autoPlay="autoPlay" loop preload='none' width='600' muted poster={thumbnail}>
                        <source src='https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00327-coxmediagroup-kiro7seattle-ono/playlist.m3u8' type='application/vnd.apple.mpegurl' />
                    </video>
                </article>
            </section>
        </div>
    )
}

export default Stream;