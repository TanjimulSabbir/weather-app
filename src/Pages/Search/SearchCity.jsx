import React, { useState } from 'react'

function SearchCity() {
    const [Cities, setCities] = useState(null)
    useState(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
            .then(response => response.json())
            .then(data => setCities(data.data))
            .catch(error => {
                console.log('Error occurred while fetching data:', error);
            });

    })


    return (
        <div>
            <select className="select select-bordered w-full max-w-xs">
                {
                    Cities?.map(cityData => {
                        return (
                            <option>
                                {cityData.city}
                            </option>
                        )
                    })
                }


            </select>
        </div>
    )
}

export default SearchCity;