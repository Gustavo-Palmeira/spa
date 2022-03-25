import React from "react"
import Navbar from "../components/shared/Navbar"
import Seo from "../components/shared/Seo"

const Layout = ({ children, title }) => {
    return (
        <>
            <Seo title={title} />
            <header>
                <Navbar />
            </header>
            <main style={{ margin: '100px 40px' }} className="text-center">
                {children}
            </main>
            <footer />
        </>
    )
}

export default Layout