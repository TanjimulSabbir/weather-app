import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci"
import CustomInput from './CustomInput';
import {AiOutlineClose} from 'react-icons/ai'

const WeatherHeader = ({ SelectedLocation, countryName,handleSelectChange }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [OpenModal, setOpenModal] = useState(false);
    
    const btnStyle = "btn btn-sm text-black border-none bg-sky-400 hover:bg-sky-500"
    const Menu = <>
        <button className={btnStyle}>Hourly Forecast</button>
        <button className={btnStyle}>Today Forecast</button>
        <button className={btnStyle}>Weekly Forecast</button>
        <button className={btnStyle}>Monthly Forecast</button>
    </>

    return (
        <div className='flex justify-between md:flex-row items-center p-5 rounded'>
            <div className='flex items-center md:space-x-6 px-2 text-xl text-white'>
                <p className='flex space-x-1 items-center text-base md:text-xl'>
                    <CiLocationOn className='block' />
                    <span className="capitalize"> {SelectedLocation ? SelectedLocation : "Rajshahi"}, {countryName}</span>
                    <sub className="mt-1 text-[10px] text-gray-300 cursor-pointer" onClick={() => setOpenModal(true)}>Custom location</sub>
                </p>

                {/* Small Device */}
                <>
                    <div onClick={() => setOpenMenu(true)} className='lg:hidden absolute right-4'>
                        <button className='p-2'>
                            <CgMenuGridO className='text-2xl' />
                        </button>
                    </div>
                    <div className={`md:hidden ${openMenu ? "block" : "hidden"} absolute top-0 right-0 w-[360px] min-h-screen bg-black bg-opacity-80 rounded-md pt-[25%] px-6 z-50`}>

                        <div className='flex relative w-full flex-col space-y-4'>
                            <button onClick={() => setOpenMenu(false)} className='text-4xl p-2 absolute -right-4 -top-1/2 md:-top-[85%] text-red-500 flex justify-center items-center rounded-full'><AiOutlineClose/></button>
                            {Menu}
                        </div>
                    </div>
                </>
            </div>

            {/* Large Device */}
            <div className='hidden lg:flex space-x-4'>
                {Menu}
            </div>
            {OpenModal? <CustomInput handleSelectChange={handleSelectChange} setOpenModal={setOpenModal} ></CustomInput>:""}
        </div>
    );
};

export default WeatherHeader;