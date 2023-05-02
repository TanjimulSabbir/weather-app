import React from 'react';
import Navbar from './Navbar';

const Header = ({temperature,handleInput,locationName}) => {
    return (
        <div className='mt-10'>
            <Navbar temperature={temperature} handleInput={handleInput} locationName={locationName}  />
        </div>
    );
};

export default Header;