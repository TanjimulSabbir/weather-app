import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { WiDayCloudyHigh } from "react-icons/wi";

const Navbar = ({ temperature, handleInput, locationName }) => {

    return (
        <div>
            <div className='UniversalPadding py-3 bg-blue-400 flex items-center space-x-4'>
                <div className='relative w-full max-w-sm'>
                    <input onBlur={handleInput} className='px-4 py-1 rounded-3xl w-full bg-gray-800' type='text' name='Location' placeholder='Search for location' />
                    <IoSearchOutline className='absolute bottom-2 right-8' />
                </div>
                <div className='flex items-center space-x-6'>
                    <p>{locationName}</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <span>
                            <WiDayCloudyHigh className='text-2xl text-gray-500' />
                        </span>
                        <p>
                            <span>
                                {temperature}
                            </span>
                            <span>°</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;