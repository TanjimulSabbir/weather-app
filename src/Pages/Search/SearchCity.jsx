import React, { useState } from 'react'

function SearchCity({ handleSelectChange }) {
    const [Cities, setCities] = useState(null);

    useState(() => {
        try {
            fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
                .then(response => response.json())
                .then(data => setCities(data.data))
        } catch (error) {

        }
    }, [])
    const sortedCities = Cities?.sort((a, b) => a.city.localeCompare(b.city));

    return (
        <div>
            <select onChange={handleSelectChange} className="px-4 py-1 rounded-3xl w-full bg-black text-gray-100 outline-0 focus:ring-2">
                {
                    sortedCities?.map(cityData => {
                        return (
                            <option key={cityData.city} value={cityData.city} className='flex items-center text-green-600 font-Merriweather-SansSerif space-x-1 space-y-4 p-6'>
                                <span className="capitalize text-green-600">{cityData.city}, {cityData.country}</span>
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SearchCity;