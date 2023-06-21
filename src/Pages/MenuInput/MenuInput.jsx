import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const MenuInput = () => {
const [Search,setSearch]=useState("")
const handleInput=(serchData)=>{
setSearch(serchData)
}
    
  return (
    <AsyncPaginate 
    placeholder="Search for city"
    debounceTimeout={600}
    value={Search}
    onChange={handleInput}
    >

    </AsyncPaginate>
  )
}

export default MenuInput