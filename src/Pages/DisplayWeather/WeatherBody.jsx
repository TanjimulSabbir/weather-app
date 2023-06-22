import React from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";
import getWeatherData from '../../Hooks/getWeatherData';
import WeatherHeader from './WeatherHeader';
import nightBg from "../../assets/images/Clear Night.webp"
import Loader from '../../assets/Loader/Loader';
import NotFound from '../../assets/NotFound/NotFound';

const WeatherBody = ({ SelectedLocation }) => {
    const { data } = getWeatherData(SelectedLocation? SelectedLocation:"Rajshahi");
    console.log(data, "weather component");

    if (!data) {
        return <Loader></Loader>;
    }
    if(data.cod==404){
        return <NotFound></NotFound>
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
                <WeatherHeader SelectedLocation={SelectedLocation} countryName={countryName}></WeatherHeader>
            </div>
            <div className='relative mt-6'>
                <div>
                    <img src={nightBg} alt='' />
                </div>
                <div className='absolute inset-0 w-full h-full top-4 left-4 flex flex-col space-y-10 text-white'>
                    <div>
                        <div className='text-white'>
                            <p>Current Weather</p>
                            <p>{data?.main?.temperature}</p>
                            <p>{formattedTime}</p>
                            <div className='w-1/4 flex justify-between items-center'>
                                <img src={iconUrl} alt="icon" srcset="" />
                                <p>{celsiusTemperature}°C</p>
                                <p className='flex flex-col'>
                                    <span>{data.weather[0].main}</span>
                                    <span>Feel Like {(data.main.feels_like - 273.15).toFixed(0)}°C</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>{data.weather[0].description}</p>
                    <div className='w-[550px] flex justify-between items-start'>
                        <p className='flex flex-col'>
                            <span>Wind</span>
                            <span>{(data.wind.speed * 2.23694).toFixed(0)} mph</span>
                        </p>
                        <p className='flex flex-col'>
                            <span>Humidity</span>
                            <span>{data.main.humidity}%</span>
                        </p>
                        <p className='flex flex-col'>
                            <span>Visibility</span>
                            <span>{data.visibility }</span>
                        </p>
                        <p className='flex flex-col'>
                            <span>Pressure</span>
                            <span>{data.main.pressure }</span>
                        </p>
                        <p className='flex flex-col'>
                            <span> Cloud Covarage</span>
                            <span>{data.clouds.all }%</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherBody;