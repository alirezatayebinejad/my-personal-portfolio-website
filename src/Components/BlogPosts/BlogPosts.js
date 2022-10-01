import "./BlogPosts.css";
import React from 'react'
import BlogCard from "./BlogCard";
import postsContent from "./blogContent"

const BlogPosts = () => {

    return (
        <div className="blogposts" id="blogposts1">
            <h1 className="blogposts__header">Blog Posts</h1>
            <div className="blogposts__items">
                {postsContent.map(post => {
                    return (
                        <BlogCard {...post} key={post.id} />
                    )
                })}

            </div>
        </div>
    )
}

export default BlogPosts;