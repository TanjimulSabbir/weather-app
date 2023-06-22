import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";

const WeatherHeader = ({ SelectedLocation, countryName }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const Menu = <>
        <button className="w-full md:w-auto bg-gray-200 p-2 rounded-lg">Current Weather</button>
        <button className="w-full md:w-auto bg-gray-200 p-2 rounded-lg">Hourly Forecast</button>
        <button className="w-full md:w-auto bg-gray-200 p-2 rounded-lg">Today Forecast</button>
        <button className="w-full md:w-auto bg-gray-200 p-2 rounded-lg">Weekly Forecast</button>
        <button className="w-full md:w-auto bg-gray-200 p-2 rounded-lg">Monthly Forecast</button>
    </>

    return (
        <div className='flex justify-between md:flex-row items-center p-4 rounded'>

            <div className='flex items-center md:space-x-6 px-2'>
                <p>{SelectedLocation ? SelectedLocation : "Rajshahi"}, {countryName}</p>

                {/* Small Device */}
                <>
                    <div onClick={() => setOpenMenu(true)} className='md:hidden absolute right-8'>
                        <button className='p-2'>
                            <CgMenuGridO className='text-lg' />
                        </button>
                    </div>
                    <div className={`md:hidden ${openMenu ? "block" : "hidden"} absolute top-0 right-0 w-[360px] min-h-screen bg-black bg-opacity-80 rounded-md pt-[25%] px-6 z-50`}>

                        <div className='flex relative w-full flex-col space-y-4'>
                            <button onClick={() => setOpenMenu(false)} className='text-2xl absolute right-0 -top-12 rounded-full border-white bg-white p-1'>❌</button>
                            {Menu}
                        </div>
                    </div>
                </>
            </div>


            {/* Large Device */}
            <div className='hidden md:flex md:space-x-2 lg:space-x-8'>
                {Menu}
            </div>
        </div>
    );
};

export default WeatherHeader;