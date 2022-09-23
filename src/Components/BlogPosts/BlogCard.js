import "./BlogCard.css"
import React from 'react'

const BlogCard = ({ id, title }) => {
    return (
        <div className="blogcard" >
            <img src="/Assets/projects/7.weatherapp.png" alt="" />
            <h2>{title}</h2>
        </div>
    )
}

export default BlogCard;
