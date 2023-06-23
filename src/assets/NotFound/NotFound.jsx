import React, { useState } from 'react'
import CustomInput from '../../Pages/DisplayWeather/CustomInput';

function NotFound({ handleSelectChange }) {
    const [OpenModal, setOpenModal] = useState(false);
    return (
        <div className='w-full h-screen flex justify-center items-center bg-no-repeat bg-cover rounded-2xl' style={{backgroundImage:"url('https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"}}>
             {OpenModal && <CustomInput handleSelectChange={handleSelectChange} setOpenModal={setOpenModal}></CustomInput>}

            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl uppercase text-white'>Location Not Found</h2>
                <p className='w-2/3 mt-3 text-center text-sm text-gray-100'>The location are you looking for might have been doesn't exist or had it's name changed or temporarily unavailable.</p>
                <p className="mt-10 text-white cursor-pointer rounded-full border border-white p-4 uppercase transition duration-500 hover:bg-white hover:text-black" onClick={() => setOpenModal(true)}>Search another Location</p>
            </div>
        </div>
    )
}

export default NotFound;