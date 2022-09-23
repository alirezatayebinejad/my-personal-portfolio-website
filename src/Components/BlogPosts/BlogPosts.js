import "./BlogPosts.css";
import React from 'react'
import BlogCard from "./BlogCard";

const BlogPosts = () => {
    const postsData = [
        { id: "1", title: "the first title and the rest is on the way" },
        { id: "2", title: "the second title " },
        { id: "3", title: "the second title " },
    ]
    return (
        <div className="blogposts">
            <h1 className="blogposts__header">Blog Posts</h1>
            <div className="blogposts__items">
                {postsData.map(post => {
                    return (
                        <BlogCard {...post} key={post.id} />
                    )
                })}

            </div>
        </div>
    )
}

export default BlogPosts;