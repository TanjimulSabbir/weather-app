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
    <div>
      {/* Open the modal using ID.showModal() method */}
      <button ref={buttonRef} onClick={() => window.InputModal.showModal()}></button>
      <dialog id="InputModal" className="modal modal-middle">
        <form method="dialog" className="modal-box bg-black bg-opacity-90">
          <div className='flex justify-center items-center'>
            <div className='w-full'>
              <p className='mb-4 text-xl text-center text-green-600 '>Enter Location</p>

            <input onChange={handleTypeChange} onBlur={handleSelectChange} value={inputValue} type="text" placeholder="Type here location" className="input capitalize border-gray-700 w-full placeholder:text-sm placeholder:text-gray-400 placeholder:normal-case" />
              {/* Submit Button */}
              <p className='btn w-full mt-5 text-green-500 border-green-500 p-1'>Submit</p>
       
            </div>
          </div>

          <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
      </dialog>
    </div>
  )
}

export default CustomInput