import React from 'react';
import getWeatherData from '../../Hooks/getWeatherData';
import WeatherHeader from './WeatherHeader';
import nightBg from "../../assets/images/Clear Night.webp"
import Loader from '../../assets/Loader/Loader';
import NotFound from '../../assets/NotFound/NotFound';
import { toast } from 'react-toastify';
import {BiInfoCircle} from 'react-icons/bi'
import {IoInformationCircle} from 'react-icons/io5'


const WeatherBody = ({ SelectedLocation,handleSelectChange }) => {
    const accurateLocation = SelectedLocation.startsWith("Al") ? SelectedLocation.split("-").join(" ") : SelectedLocation.split(/[-(/]/)[0];
    const { data } = getWeatherData(SelectedLocation ? accurateLocation : "Rajshahi");
    console.log(SelectedLocation.split(/[-(/]/)[0], "weather component");

    if (!data) {
        return <Loader></Loader>;
    }
    if (data.cod == 404) {
        toast("Location doesn't exist!")
        return <NotFound handleSelectChange={handleSelectChange}></NotFound>;
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
        <div className=''>
            <div className='UniversalPadding bg-black rounded'>
                <WeatherHeader SelectedLocation={SelectedLocation} handleSelectChange={handleSelectChange}  countryName={countryName}></WeatherHeader>
            </div>
            <div className='w-full h-screen mt-6 text-white  bg-black p-3 md:p-6 rounded-lg bg-opacity-60'>
                <div className='UniversalPadding w-full h-full flex flex-col'>
                    {/* Top Part */}
                    <div>
                        <div className='text-white'>
                            <p className='text-xl text-green-500 border border-green-500 py-1 px-4 rounded-3xl inline-block'>Current Weather</p>
                            <p>{data?.main?.temperature}</p>
                            <p className='my-6 md:my-3 text-lg'>{formattedTime}</p>
                            <div className='md:w-[500px] flex justify-start items-center'>
                                <div className='flex space-x-2 items-center justify-start -ml-2'>
                                    <img className='pt-1' src={iconUrl} alt="icon" srcset="" />
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
                    <p className='text-sm py-10'>{data.weather[0].description}</p>
                    {/* Footer */}
                    <div className='w-full md:w-[500px] flex justify-between items-start'>
                        <p className='flex flex-col gap-1'>
                            <span className='cursor-pointer'>Wind <sup><BiInfoCircle className='inline-block -ml-[2px] text-[10px] mb-1'/></sup></span>
                            <span>{(data.wind.speed * 2.23694).toFixed(0)} mph</span> 
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span className='cursor-pointer'>Humidity <sup><BiInfoCircle className='inline-block -ml-[2px] text-[10px]'/></sup></span>
                            <span>{data.main.humidity}%</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span className='cursor-pointer'>Visibility <sup><BiInfoCircle className='inline-block -ml-[2px] text-[10px]'/></sup></span>
                            <span>{data.visibility}</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span className='cursor-pointer'>Pressure <sup><BiInfoCircle className='inline-block -ml-[2px] text-[10px]'/></sup></span>
                            <span>{data.main.pressure}</span>
                        </p>
                        <p className='flex flex-col gap-1'>
                            <span className='cursor-pointer'> Cloud Covarage <sup><BiInfoCircle className='inline-block -ml-[2px] text-[10px]'/></sup></span>
                            <span>{data.clouds.all}%
                           
                            </span>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherBody;