import React from "react"

const Comment = ({ comment }) => {
    return (
        <div>
            <span className="fw-bold">{comment.user.name}: </span>
            <span>{ comment.text }</span>
        </div>
    )
}

export default Comment