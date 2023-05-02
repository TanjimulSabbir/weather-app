import { useState } from 'react';
import './App.css'
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'

function App() {
  const [locationName, setLocationName] = useState("Rajshahi");
  const [temperature, setTemperature] = useState(32)

  const handleInput = (event) => {
    const Location = event.target.value;
    setLocationName(Location)
  }


  return (
    <div className='min-h-screen'>
      <Header temperature={temperature} handleInput={handleInput} locationName={locationName} >
      </Header>
      <Home temperature={temperature} handleInput={handleInput} locationName={locationName}>
      </Home>
    </div>
  )
}

export default App
