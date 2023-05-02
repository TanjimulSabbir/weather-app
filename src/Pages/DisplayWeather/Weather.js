import React from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";

const Weather = ({ temperature, handleInput, locationName }) => {
    return (
        <div>
            <div>
                <div className='flex items-center space-x-6'>
                    <p>{locationName}</p>
                </div>
            </div>
        </div>
    );
};

export default Weather;