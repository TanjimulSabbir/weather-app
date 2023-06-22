// import React, { useState } from 'react';
// import { IoSearchOutline } from "react-icons/io5";
// import { WiDayCloudyHigh } from "react-icons/wi";
// import SearchCity from '../Search/SearchCity';

// const Navbar = ({ handleSelectChange, SelectedLocation, }) => {

//     return (
//         <div>
//             <div className='UniversalPadding py-3 bg-blue-400 flex items-center space-x-4 text-white'>
//                 {/* <div className='relative w-full max-w-sm'>
//                     <input onBlur={handleInput} className='px-4 py-1 rounded-3xl w-full bg-white' type='text' name='Location' placeholder='Search for location' />
//                     <IoSearchOutline className='absolute bottom-2 right-8' />
//                 </div> */}
//                 <SearchCity handleSelectChange={handleSelectChange}></SearchCity>
                
//                 <div className='flex items-center space-x-6 text-white'>
//                     <p>{SelectedLocation}</p>
//                     <div className='flex items-center justify-center space-x-1'>
//                         <span>
//                             <WiDayCloudyHigh className='text-2xl text-white' />
//                         </span>
//                         <p>
//                             <span>
//                                 {}
//                             </span>
//                             <span>°</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;