import React from 'react';
import WeatherBody from '../DisplayWeather/WeatherBody';
import SearchCity from '../Search/SearchCity';


const Home = ({ temperature, locationName }) => {
    return (
        <div className='UniversalPadding mt-10'>
            <WeatherBody temperature={temperature}
                locationName={locationName}>
            </WeatherBody>
     <SearchCity></SearchCity>
        </div>
    );
};

export default Home;