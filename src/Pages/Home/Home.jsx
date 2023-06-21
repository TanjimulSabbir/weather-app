import React from 'react';
import WeatherBody from '../DisplayWeather/WeatherBody';


const Home = ({ temperature, locationName }) => {
    return (
        <div className='UniversalPadding mt-10'>
            <WeatherBody temperature={temperature}
                locationName={locationName}>
            </WeatherBody>
        </div>
    );
};

export default Home;