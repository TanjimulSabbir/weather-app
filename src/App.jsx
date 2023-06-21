import { useState } from 'react';
import './App.css'
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'

function App() {
  const [locationName, setLocationName] = useState("Rajshahi");
  const [temperature, setTemperature] = useState(32)

  const handleInput = (event) => {
    const Location = event.target.value;
    const capitalizedLocation = Location.charAt(0).toUpperCase() + Location.substring(1);
    setLocationName(capitalizedLocation)
  }

  return (
    <div className='min-h-screen bg-sky-700'>
      <Header temperature={temperature} handleInput={handleInput} locationName={locationName} >
      </Header>
      <Home temperature={temperature} locationName={locationName}>
      </Home>
    </div>
  )
}

export default App
