import "./ContactMe.css"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Modal from "../Modal/Modal"

const ContactMe = () => {

    const [resultText, setResultText] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        emailjs.sendForm('service_2qfsmco', 'template_umliy8h', form.current, 'W_V-EAwWP5FVl3I9H')
            .then((result) => {
                console.log(result);
                setModalOpen(true);
                setResultText("Your message has been sent successfuly I will reply to your email as soon as possible")
            }, (error) => {
                console.log(error);
                setModalOpen(true)
                setResultText("there was a problem with sending your message, sorry !!")
            });
        setSubmitClicked(false);
        form.current.reset()
    };

    return (
        <>
            <div className="contactme">
                <h1 className="projects__header">Contact me</h1>

                <form className="contactme__form" ref={form} action="" onSubmit={sendEmail} name="contactme">
                    <h3> feel free to say hi 👋</h3>
                    <input placeholder="Your name" type="text" name="from_name" tabIndex="1" required />
                    <input placeholder="Your Email Address" type="email" name="reply_to" tabIndex="2" required />
                    <textarea placeholder="Type your message here...." name="message" tabIndex="5" required ></textarea>
                    <button disabled={submitClicked} name="submit" type="submit" data-submit="...Sending">Submit</button>
                </form>
            </div >

            {modalOpen &&
                <Modal setOpenModal={setModalOpen}>
                    {resultText}
                </Modal>
            }
        </>
    )
}

export default ContactMe