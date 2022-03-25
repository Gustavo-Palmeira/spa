import React from "react"
import Helmet from 'react-helmet'

const Seo = ({ title }) => {
    const titleText = title ? `${title} - Senacgram` : 'Senacgram'

    return (
        <Helmet>
            <title>{ titleText }</title>
        </Helmet>
    )
}

export default Seo