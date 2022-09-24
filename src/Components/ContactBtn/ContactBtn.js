import "./ContactMe.css";
import React, { useState } from 'react';
import Modal from '../Modal/Modal'

const ContactBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className="contactbtn" onClick={() => setIsOpen(true)}>
                <img src="/Assets/icons/call.png" alt="call icon" />
            </button>
            {isOpen &&
                <Modal setOpenModal={setIsOpen}>
                    <h2>ways to contact me</h2>
                    <hr />
                    <br />
                    <p><span>Email me: </span>alirezatayebinejad@gmail.com</p>
                    <p>you can directy email me from the contact form at the end of the homepage if there was a problem use email address</p>
                    <br />
                    <p><span>whatsapp me: </span>+989019280211 <a href="https://wa.me/989019280211"><br />(click here to send message)</a></p>
                    <p>for the fastest response</p>
                    <br />
                    <p><span> or you can call me i'll answere if I'm free <a href="tel:+989019280211"><br />(click to call)</a> </span></p>
                </Modal>}
        </>
    )
}

export default ContactBtn;