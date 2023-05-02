import React, { useEffect, useState } from 'react';

const getWeatherData = (locationName) => {
    const [data, setData] = useState(null);
    console.log(locationName, "GetWeather component");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=8eb00c8d2f28570b8fdf14b1df6f7fd5`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [locationName]);

    return [data];
};

export default getWeatherData;