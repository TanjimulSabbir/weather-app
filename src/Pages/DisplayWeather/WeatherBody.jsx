import React from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";
import getWeatherData from '../../Hooks/getWeatherData';
import WeatherHeader from './WeatherHeader';
import nightBg from "../../assets/images/Clear Night.webp"
import Loader from '../../assets/Loader/Loader';

const WeatherBody = ({ temperature, locationName }) => {
    const { data } = getWeatherData(locationName);
    console.log(data, "weather component");

    if (!data) {
        return <Loader></Loader>
    }
    // Time
    const timezoneOffset = data.timezone; // Replace with the actual time zone offset in seconds

    const currentTime = new Date();
    const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const targetTime = utcTime + timezoneOffset * 1000;
    const localTime = new Date(targetTime);
    const formattedTime = localTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    });

    // Country Name
    const countryCode = data?.sys?.country;
    const regionNames = new Intl.DisplayNames(
        ['en'], { type: 'region' }
    );
    const countryName = regionNames.of(countryCode)
    // Icon
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // Temparature
    const celsiusTemperature = (data.main.temp - 273.15).toFixed(0);
    return (
        <div>
            <div>
                <WeatherHeader locationName={locationName} countryName={countryName}></WeatherHeader>
            </div>
            <div className='relative mt-6'>
                <div>
                    <img src={nightBg} alt='' />
                </div>
                <div className='absolute top-6 left-6 text-white'>
                    <p>Current Weather</p>
                    <p>{data?.main?.temperature}</p>
                    <p>{formattedTime}</p>
                    <div className='flex space-x-6 items-center'>
                        <img src={iconUrl} alt="icon" srcset="" />
                        <p>{celsiusTemperature}°C</p>
                        <p className='flex flex-col'>
                            <span>{data.weather[0].main}</span>
                            <span>Feel Like {(data.main.feels_like - 273.15).toFixed(0)}°C</span>
                        </p>
                    </div>
                    <p>{data.weather[0].description}</p>
                <div className='inset-0 w-full space-x-5 flex justify-around items-center'>
                    <p className='flex flex-col'>
                        <span>Wind</span>
                        <span>{(data.wind.speed* 3.6).toFixed(0)} Km/h</span>
                    </p>
                    <p className='flex flex-col'>Humidity</p>
                    <p className='flex flex-col'>Visibility</p>
                    <p className='flex flex-col'>Pressure</p>
                    <p className='flex flex-col'>Dew Point</p>
                </div>
                </div>
             
            </div>
        </div>
    );
};

export default WeatherBody;