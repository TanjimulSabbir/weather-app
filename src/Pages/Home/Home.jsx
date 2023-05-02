import React from 'react';
import Weather from '../DisplayWeather/Weather';

const Home = ({temperature,handleInput,locationName}) => {
    return (
        <div className='UniversalPadding mt-10'>
            <Weather temperature={temperature} handleInput={handleInput} locationName={locationName}></Weather>
        </div>
    );
};

export default Home;