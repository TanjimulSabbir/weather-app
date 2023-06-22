import React from 'react';
import SearchCity from '../Search/SearchCity';

const Header = ({handleSelectChange,SelectedLocation}) => {
    return (
        <div className='pt-10 w-1/2 mx-auto'>
            <SearchCity handleSelectChange={handleSelectChange}></SearchCity>
        </div>
    );
};

export default Header;