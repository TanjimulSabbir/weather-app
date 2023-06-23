import React from 'react';
import WeatherBody from '../DisplayWeather/WeatherBody';

const Home = ({ SelectedLocation,handleSelectChange }) => {
    return (
        <div className='UniversalPadding mt-10'>
            <WeatherBody SelectedLocation={SelectedLocation}  handleSelectChange={handleSelectChange}></WeatherBody>
        </div>
    );
};

export default Home;