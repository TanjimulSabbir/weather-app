import React from 'react';

const WeatherHeader = ({ locationName }) => {
    return (
        <div className='flex flex-col space-y-6 md:flex-row md:justify-around md:items-center'>
            <div className='flex items-center justify-center md:justify-start space-x-6 px-2 py-2'>
                <p>{locationName}</p>
            </div>
            <div className='flex flex-col space-y-4 md:flex-row md:space-x-10 md:items-center'>
                <button className="bg-gray-200 px-2 py-2 rounded-lg">Current Weather</button>
                <button className="bg-gray-200 px-2 py-2 rounded-lg">Hourly Forecast</button>
                <button className="bg-gray-200 px-2 py-2 rounded-lg">Today Forecast</button>
                <button className="bg-gray-200 px-2 py-2 rounded-lg">Weekly Forecast</button>
                <button className="bg-gray-200 px-2 py-2 rounded-lg">Monthly Forecast</button>
            </div>
        </div>
    );
};

export default WeatherHeader;