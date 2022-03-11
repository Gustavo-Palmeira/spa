import React, { useContext } from "react"
import { UserContext } from "../App"

const Post = ({ content, image, username, likes, date }) => {
    const currentUser = useContext(UserContext)
    const isSameUser = username === currentUser

    return (
        <div>
            <h2><span style={{ color: isSameUser && 'green' }}>{username}</span>{` ${date.toLocaleString('pt-BR')}`}</h2>
            <img src={URL.createObjectURL(image)} />
            <p>{content}</p>
            <button>{likes} curtidas</button>
        </div>
    )
}

export default Post