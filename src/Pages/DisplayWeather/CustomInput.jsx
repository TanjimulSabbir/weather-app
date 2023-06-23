import React, { useEffect, useRef, useState } from 'react'

const CustomInput = ({handleSelectChange,setOpenModal}) => {
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    console.log(inputValue,"Custom Input Modal Inputed Value")
    const buttonRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, []);
    const handleKeyUp = (event) => {
      if (event.key === 'Enter') {
        inputRef.current.blur();
      }
    };

    return (
        <div>
            {/* Open the modal using ID.showModal() method */}
            <button ref={buttonRef} onClick={()=>window.InputModal.showModal()}></button>
            <dialog id="InputModal"  className="modal modal-middle">
                <form method="dialog" className="modal-box">

                    <input ref={inputRef} onBlur={handleSelectChange} onChange={handleInputChange} value={inputValue} onKeyUp={handleKeyUp} type="text" placeholder="Type here location" className="input capitalize border-gray-700 w-full max-w-xs" />
                   
                    <button onClick={()=>setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </dialog>
        </div>
    )
}

export default CustomInput