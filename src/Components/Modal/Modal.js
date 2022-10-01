import "./Modal.css"
import React from 'react'

const Modal = ({ children, setOpenModal }) => {

    return (
        <div className="modal">
            <style>{"html{overflow:hidden;}"}</style>
            <div className="modal__back" onClick={() => setOpenModal(false)}></div>
            <div className="modal__content">
                <img className="modal__closebtn" src="/Assets/icons/close.png" alt="close icon" onClick={() => setOpenModal(false)}></img>
                {children}
            </div>
        </div >
    )
}

export default Modal