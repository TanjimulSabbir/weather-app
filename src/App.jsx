import { useState } from 'react';
import './App.css'
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'

function App() {
  const [SelectedLocation,setSelectedLocation]=useState("");

  const handleSelectChange = (event) => {
      const selected = event.target.value;
      setSelectedLocation(selected)
    };

  return (
    <div className='min-h-screen bg-sky-700'>
      <Header handleSelectChange={handleSelectChange} SelectedLocation={SelectedLocation} >
      </Header>
      <Home SelectedLocation={SelectedLocation}></Home>
    </div>
  )
}

export default App
