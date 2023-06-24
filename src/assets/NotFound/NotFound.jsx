import React, { useState } from 'react'
import CustomInput from '../../Pages/DisplayWeather/CustomInput';

function NotFound({ handleSelectChange }) {
    const [OpenModal, setOpenModal] = useState(false);
    return (
        <div className='w-full h-screen flex justify-center items-center bg-no-repeat bg-cover rounded-2xl bg-black bg-opacity-70 font-Merriweather-SansSerif'>
             {OpenModal && <CustomInput handleSelectChange={handleSelectChange} setOpenModal={setOpenModal}></CustomInput>}

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl uppercase text-white font-Merriweather-SansSerif'>Location Not Found</h2>
                <p className='w-2/3 mt-3 text-center text-sm text-gray-100 font-Merriweather-SansSerif'>The location are you looking for might have been doesn't exist or had it's name changed or temporarily unavailable.</p>
                <p className="mt-10 text-green-500 cursor-pointer rounded-full border border-green-500 p-4 uppercase transition duration-500 hover:bg-white hover:text-black hover:border-white font-Merriweather-SansSerif" onClick={() => setOpenModal(true)}>Search another Location</p>
            </div>
        </div>
    )
}

export default NotFound;