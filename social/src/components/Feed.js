import React from "react"
import Post from "./Post"

const Feed = ({ posts }) => {

    return (
        <>
            {posts.map((post, index) => (
                <Post index={index} {...post} />
            ))}
        </>
    )
}

export default Feed