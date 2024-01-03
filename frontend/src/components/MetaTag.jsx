import React from 'react'

import { Helmet } from "react-helmet";
const MetaTag = ({ title }) => {
    return (
        // it will change the name of page in browser tab.. 
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>
    )
}

export default MetaTag