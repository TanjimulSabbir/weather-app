import React from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";
import getWeatherData from '../../Hooks/getWeatherData';

const Weather = ({ temperature, locationName }) => {
    console.log(locationName, "weather component")
    const [WeatherData] = getWeatherData(locationName);
    console.log(WeatherData, "weather component")
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