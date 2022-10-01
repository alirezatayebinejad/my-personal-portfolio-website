import "./BlogCard.css"
import React, { useState } from 'react'
import Modal from "../Modal/Modal";

const BlogCard = ({ id, imgSrc, title, content }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="blogcard" onClick={() => setOpenModal(true)}>
                <img src={imgSrc} alt="" />
                <h2>{title}</h2>
            </div>
            {openModal &&
                <Modal setOpenModal={setOpenModal}>
                    {/* all styles in Components/Modal/Modal.css */}
                    {content()}
                </Modal>}
        </>
    )
}

export default BlogCard;
