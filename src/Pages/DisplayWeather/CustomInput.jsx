import React, { useEffect, useRef, useState } from 'react'

const CustomInput = ({handleSelectChange}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    console.log(inputValue,"Custom Input Modal Inputed Value")
    const buttonRef = useRef(null);

    useEffect(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, []);

    return (
        <div>
            {/* Open the modal using ID.showModal() method */}
            <button ref={buttonRef} className="btn" onClick={()=>window.InputModal.showModal()}>Type location here</button>
            <dialog id="InputModal"  className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">

                    <input onBlur={handleSelectChange} onChange={handleInputChange} value={inputValue} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                   
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </dialog>
        </div>
    )
}

export default CustomInput