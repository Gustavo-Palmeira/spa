import React from "react"
import Comment from "./comment"

const Post = ({ post }) => {
    return (
        <article className="border rounded-3 m-4">
            <div className="text-start m-3">
                <img src={post.user.img} className="rounded-circle" style={{ maxHeight: 40, maxWidth: 40 }} />
                <span className="mx-2 fw-bold">{post.user.name}</span>
            </div>
            <div>
                <img src={post.img} className='img-fluid' />
            </div>
            <div className="text-start m-3">
                <div>
                    <i className="fa-regular fa-heart fs-4 me-2 pointer" />
                    <i className="fa-regular fa-comment-dots fs-4"></i>
                </div>
                <div>
                    <span className="d-block fw-bold">{ post.likes === 1 ? `${post.likes} like` : `${post.likes} likes` }</span>
                    <span className="fw-bold">{post.user.name}: </span>
                    <span>{post.text}</span>
                    { post.comments.map(comment => <Comment comment={comment} />) }
                </div>
            </div> 
        </article>
    )
}

export default Post