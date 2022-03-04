import React, { useState } from "react"
import Header from "./components/Header"
import NewPost from "./components/NewPost"
import Feed from "./components/Feed"

const App = () => {
    const [username, setUsername] = useState("Gustavo Palmeira")
    const [posts, setPosts] = useState([])

    console.log(posts)

    return (
        <>
            <Header username={username} setUsername={setUsername} />
            <NewPost posts={posts} setPosts={setPosts} username={username} />
            <Feed posts={posts} />
        </>
    )
}

export default App