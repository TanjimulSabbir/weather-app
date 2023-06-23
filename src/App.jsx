import { useState } from 'react';
import './App.css'
import Header from './Pages/Header/Header'
import Home from './Pages/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [SelectedLocation,setSelectedLocation]=useState("");

  const handleSelectChange = (event) => {
      const selected = event.target.value;
      if(!selected){
        toast("Please! Input Location!")
      }else{
        setSelectedLocation(selected)
        // event.target.textContent = '';
      }
     
    };

  return (
    <div className='min-h-screen bg-sky-700 bg-no-repeat bg-cover' style={{backgroundImage:"url('https://i.ibb.co/SJyhfh0/fog-dark-clouds-mountains.jpg')"}}>
      <Header handleSelectChange={handleSelectChange} SelectedLocation={SelectedLocation} >
      </Header>
      <Home SelectedLocation={SelectedLocation}  handleSelectChange={handleSelectChange}></Home>
      <ToastContainer />
    </div>
  )
}

export default App
