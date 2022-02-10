import React from 'react';
import data from './data/forecast';

const Meteorologist = () => {
    console.log('data[0]: ', data[0])

    return (
        <div className="meteorologist">
            <div className="flex-container">
                <div className="profile-pic">
                    <img src={data[0].meteorologistimage} alt="" />
                </div>
                <div className="profile-data">
                    <div className="heading">Forecast by <span className="title">{data[0].meteorologisttitle}</span></div>
                    <div className="name">{data[0].meteorologistname}</div>
                    <div className="emblem">
                        <img src={data[0].emblemurl} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Meteorologist;