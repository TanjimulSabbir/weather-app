import React from 'react';
import Weather from '../DisplayWeather/Weather';

const Home = ({ temperature, locationName }) => {
    return (
        <div className='UniversalPadding mt-10'>
            <Weather temperature={temperature}
                locationName={locationName}>
            </Weather>
        </div>
    );
};

export default Home;