import React from 'react';
import WeatherBody from '../DisplayWeather/WeatherBody';
import LocationSearchInput from '../MenuInput/MenuInput';


const Home = ({ temperature, locationName }) => {
    return (
        <div className='UniversalPadding mt-10'>
            <WeatherBody temperature={temperature}
                locationName={locationName}>
            </WeatherBody>
            <LocationSearchInput></LocationSearchInput>
        </div>
    );
};

export default Home;