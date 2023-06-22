import React, { useState } from 'react'

function SearchCity({handleSelectChange}) {
    const [Cities, setCities] = useState(null);
    
    useState(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
            .then(response => response.json())
            .then(data => setCities(data.data))
            .catch(error => {
                console.log('Error occurred while fetching data:', error);
            });

    })
    const sortedCities = Cities?.sort((a, b) => a.city.localeCompare(b.city));
   
    return (
        <div>
            <select onChange={handleSelectChange} className="select select-bordered w-full max-w-xs">
                {
                    sortedCities?.map(cityData => {
                        return (
                            <option key={cityData.city} value={cityData.city} className='space-y-4 p-4'>
                                {cityData.city}, {cityData.country}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SearchCity;