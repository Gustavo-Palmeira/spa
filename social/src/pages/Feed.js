import React from "react"
import Layout from "../layouts/Layouts"
import { getPost } from '../data'
import Post from "../components/feed/post"

const Feed = () => {
    const posts = [getPost(), getPost(), getPost()]

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