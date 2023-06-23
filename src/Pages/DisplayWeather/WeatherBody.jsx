import React from 'react';
import { WiDayCloudyHigh } from "react-icons/wi";
import getWeatherData from '../../Hooks/getWeatherData';
import WeatherHeader from './WeatherHeader';
import nightBg from "../../assets/images/Clear Night.webp"
import Loader from '../../assets/Loader/Loader';
import NotFound from '../../assets/NotFound/NotFound';
import CustomInput from './CustomInput';

const WeatherBody = ({ SelectedLocation,handleSelectChange }) => {
    const accurateLocation = SelectedLocation.startsWith("Al") ? SelectedLocation.split("-").join(" ") : SelectedLocation.split(/[-(/]/)[0];
    const { data } = getWeatherData(SelectedLocation ? accurateLocation : "Rajshahi");
    console.log(SelectedLocation.split(/[-(/]/)[0], "weather component");

    if (!data) {
        return <Loader></Loader>;
    }
    if (data.cod == 404) {
        return <CustomInput handleSelectChange={handleSelectChange}></CustomInput>;
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
                    <img className='h-[400px] md:h-auto' src={nightBg} alt='' />
                </div>
                <div className='absolute inset-0 w-full h-full top-4 left-4 flex flex-col text-white'>
                    {/* Top Part */}
                    <div>
                        <div className='text-white'>
                            <p className='text-2xl text-green-600'>Current Weather</p>
                            <p>{data?.main?.temperature}</p>
                            <p className='my-4 md:my-2 text-lg'>{formattedTime}</p>
                            <div className='md:w-[500px] flex justify-start items-center'>
                                <div className='flex items-center '>
                                    <img className='pt-3' src={iconUrl} alt="icon" srcset="" />
                                    <p className='text-xl font-bold'>{celsiusTemperature}°C</p>
                                </div>
                                
                                <p className='w-full flex justify-evenly items-center'>
                                    <span className='text-2xl'>{data.weather[0].main}</span>
                                    <span>Feel Like <strong>{(data.main.feels_like - 273.15).toFixed(0)}°C</strong></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Description */}
                    <p className='text-sm py-10 md:py-6'>{data.weather[0].description}</p>
                    {/* Footer */}
                    <div className='md:w-[500px] flex justify-between items-start pr-6'>
                        <p className='flex flex-col gap-1'>
                            <span>Wind</span>
                            <span>{(data.wind.speed * 2.23694).toFixed(0)} mph</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span>Humidity</span>
                            <span>{data.main.humidity}%</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span>Visibility</span>
                            <span>{data.visibility}</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span>Pressure</span>
                            <span>{data.main.pressure}</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span> Cloud Covarage</span>
                            <span>{data.clouds.all}%</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherBody;