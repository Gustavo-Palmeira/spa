import React from "react"
import { Link } from "react-router-dom"
import Layout from "../layouts/Layouts"

const NotFound = () => {
    return (
        <Layout title="🧨 404">
            <p className="h4">🧨 Desculpe, essa página não está disponível</p>
            <p>O link que você tentou está quebrado ou foi removido</p>
            <Link to="/">Retorne para o Senacgram</Link>
        </Layout>
    )
}

export default NotFound