import React, { createContext, useReducer, useState } from "react"
import Header from "./components/Header"
import NewPost from "./components/NewPost"
import Feed from "./components/Feed"
import { reducer } from "./reducer"

export const UserContext = createContext()
export const PostContext = createContext()

const App = () => {
    const [state, dispatch] = useReducer(reducer, { posts: [] })
    const [username, setUsername] = useState("Gustavo Palmeira")

    return (
        <UserContext.Provider value={username}>
            <Header username={username} setUsername={setUsername} />
            <PostContext.Provider value={dispatch}>
                {username && <NewPost username={username} />}
                <Feed posts={state.posts} />
            </PostContext.Provider>
        </UserContext.Provider>
    )
}

export default App