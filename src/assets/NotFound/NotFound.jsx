import React, { useState } from 'react'
import CustomInput from '../../Pages/DisplayWeather/CustomInput';

function NotFound({ handleSelectChange }) {
    const [OpenModal, setOpenModal] = useState(false);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
             {OpenModal && <CustomInput handleSelectChange={handleSelectChange} setOpenModal={setOpenModal}></CustomInput>}

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl uppercase text-white'>Location Not Found</h2>
                <p className='w-2/3 mt-3 text-center text-sm text-gray-300'>The location are you looking for might have been doesn't exist or had it's name changed or temporarily unavailable.</p>
                <p className="mt-10 text-gray-300 cursor-pointer rounded-3xl border border-white p-4 uppercase" onClick={() => setOpenModal(true)}>Search another Location</p>
            </div>
        </div>
    )
}

export default NotFound;