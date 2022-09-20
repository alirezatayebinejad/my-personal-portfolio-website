import "./ProjectsCard.css"
import React from 'react'

const ProjectsCard = ({ imgUrl, altText, title }) => {
    return (
        <div className="projectscard">
            <img src={imgUrl} alt={altText} />
            <p>{title}</p>
            <button>view & info</button>
        </div>
    )
}

export default ProjectsCard