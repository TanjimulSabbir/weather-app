import React from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";
import getWeatherData from '../../Hooks/getWeatherData';
import WeatherHeader from './WeatherHeader';

const Weather = ({ temperature, locationName }) => {
    console.log(locationName, "weather component")
    const [WeatherData] = getWeatherData(locationName);
    console.log(WeatherData, "weather component")
    const ApiObjectKeys = [
        { "coord": "its for map integration(longitude and latitude)" },
        { "weather": "It includes an ID, a description of the weather,main info(sky clear), and an icon code" },
        { "base": "" },
        { "main": "This object contains various temperature, pressure, sea level, ground level, max-min temperature, and humidity values related to the current weather conditions" },
        { "visibility": "" },
        { "wind": "" },
        { "clouds": "" },
        { "dt": "" },
        { "sys": "" },
        { "timezone": "" },
        { "id": "Country Id" },
        { "name": "City Name" },
        { "code": "http status-code" }
    ]

    return (
        <div>
            <div>
                <WeatherHeader locationName={locationName}></WeatherHeader>
            </div>
        </div>
    );
};

export default Weather;