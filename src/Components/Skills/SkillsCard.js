import "./SkillsCard.css";
import React from 'react'

const skillsCard = ({ imgUrl, title }) => {
    return (
        <div className='items__item'>
            <div className='item__icon'>
                <img src={imgUrl} alt="VSCode logo" />
            </div>
            <div className='item__info'>{title}</div>
        </div>
    )
}

export default skillsCard