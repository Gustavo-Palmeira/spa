import React from "react"

const Post = ({ content, image, username, likes, date }) => {

    return (
        <div>
            <h2>{`${username} - ${date.toLocaleString('pt-BR')}`}</h2>
            <img src={URL.createObjectURL(image)} />
            <p>{content}</p>
            <button>{likes} curtidas</button>
        </div>
    )
}

export default Post