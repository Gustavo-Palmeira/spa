import React, { useRef, useState } from "react"

const NewPost = ({ posts, setPosts, username }) => {
    const [content, setContent] = useState()
    const image = useRef()

    const handleChangeMessage = ({ target: { value } }) => {
        setContent(value)
    }

    const handleClickNewPost = () => {
        setPosts([{
            content: content,
            image: image.current.files[0],
            username: username,
            likes: 0,
            date: new Date()
        }, ...posts])

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