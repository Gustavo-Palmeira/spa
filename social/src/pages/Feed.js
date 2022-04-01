import React, { useContext } from "react"
import Layout from "../layouts/Layouts"
import { getPost } from '../data'
import Post from "../components/feed/post"

import { UserContext } from "../auth"

const Feed = () => {
    const posts = [getPost(), getPost(), getPost()]
    const { currentUser } = useContext(UserContext)
    console.log(currentUser,' current')

    return (
        <Layout title="📰 Feed">
            <div className="row">
                <div className="col-6 mx-auto">
                    { posts.map(post => <Post key={post.id} post={post} />) }
                </div>
            </div>
        </Layout>
    )
}

export default Feed