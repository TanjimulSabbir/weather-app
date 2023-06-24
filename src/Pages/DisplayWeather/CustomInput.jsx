import React, { useEffect, useRef, useState } from 'react'

const CustomInput = ({ handleSelectChange, setOpenModal }) => {
  const [inputValue, setInputValue] = useState('');


  const handleTypeChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue, "Custom Input Modal Inputed Value");
  // Auto Clicked
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <div className='bg-opacity-100 z-50'>
      {/* Open the modal using ID.showModal() method */}
      <button ref={buttonRef} onClick={() => window.InputModal.showModal()}></button>
      <dialog id="InputModal" className="modal modal-middle">
        <form method="dialog" className="modal-box bg-black">
          <div className='flex justify-center items-center'>
            <div className='w-full'>
              <p className='mb-4 text-xl text-center text-green-600 '>Enter Location</p>

            <input onChange={handleTypeChange} onBlur={handleSelectChange} value={inputValue} type="text" placeholder="Type here location" className="input capitalize text-green-600 border-green-600 w-full bg-transparent text-sm placeholder:text-green-600 placeholder:normal-case" />
              {/* Submit Button */}
              <p className='btn w-full mt-5 bg-transparent text-green-500 border-green-500 p-1'>Submit</p>
       
            </div>
          </div>

          <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle text-red-600 absolute right-2 top-2">✕</button>
        </form>
      </dialog>
    </div>
  )
}

export default CustomInput