import React from 'react';
import WeatherBody from '../DisplayWeather/WeatherBody';

const Home = ({ SelectedLocation }) => {
    return (
        <div className='UniversalPadding mt-10'>
            <WeatherBody SelectedLocation={SelectedLocation}></WeatherBody>
        </div>
    );
};

export default Home;