import "./Modal.css"
import React, { useState } from 'react'

const Modal = ({ children, setOpenModal }) => {

    return (
        <div className="modal">
            <div className="modal__back" onClick={() => setOpenModal(false)}></div>
            <div className="modal__content">
                <img className="modal__closebtn" src="/Assets/icons/close.png" onClick={() => setOpenModal(false)}></img>
                {children}
            </div>
        </div >
    )
}

export default Modal