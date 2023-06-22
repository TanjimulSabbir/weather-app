import React from 'react';
import SearchCity from '../Search/SearchCity';

const Header = ({handleSelectChange,SelectedLocation}) => {
    return (
        <div className='mt-10'>
            <SearchCity handleSelectChange={handleSelectChange}></SearchCity>
        </div>
    );
};

export default Header;