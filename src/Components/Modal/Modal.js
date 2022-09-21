import "./Modal.css"
import React, { useState } from 'react'

const Modal = ({ children, setOpenModal }) => {

    return (
        <div className="modal">
            <div className="modal__back" onClick={() => setOpenModal(false)}></div>

            <div className="modal__content">
                {children}
            </div>
        </div >
    )
}

export default Modal