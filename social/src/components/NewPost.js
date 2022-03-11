import React, { useContext, useRef, useState } from "react"
import { PostContext } from "../App"

const NewPost = ({ username }) => {
    const dispatch = useContext(PostContext)
    const [content, setContent] = useState()
    const image = useRef()

    const handleChangeMessage = ({ target: { value } }) => {
        setContent(value)
    }

    const handleClickNewPost = () => {
        const newPost = {
            content: content,
            image: image.current.files[0],
            username: username,
            likes: 0,
            date: new Date()
        }

        dispatch({ type: "CREATE_POST", payload: { newPost } })
        setContent("")
        image.current.value = ""
    }

    return (
        <div>
            <input value={content} type="text" placeholder="O que você está pensando?" onChange={handleChangeMessage} />
            <input type="file" ref={image} />
            <button onClick={handleClickNewPost}>Post</button>
        </div>
    )
}

export default NewPost