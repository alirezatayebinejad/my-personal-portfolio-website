import "./ProjectsCard.css"
import React, { useState } from 'react'
import Modal from "../Modal/Modal"

const ProjectsCard = ({ imgUrl, altText, title, information }) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className="projectscard">
                <img src={imgUrl} alt={altText} />
                <p>{title}</p>
                <button onClick={() => setOpenModal(true)}>view & info</button>
            </div>
            {
                openModal &&
                <Modal setOpenModal={setOpenModal}>
                    {/* all styles in Components/Modal/Modal.css */}
                    <img className="Modal__image" src={imgUrl} alt={altText} />
                    <h2 className="modal__title">{title}</h2>
                    <p><b>base techs used:</b> {information.tools}</p>
                    <p><b>info:</b> {information.info}</p>
                    <div className="Modal__btns">
                        <a href={information.demoUrl} target="_blank"><button>see demo website</button></a>
                        <a href={information.githubUrl} target="_blank"><button>checkout source code</button></a>
                    </div>
                </Modal>
            }
        </>
    )
}

export default ProjectsCard