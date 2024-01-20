import React from 'react'

const Card = ({ children, className }) => {
    return (
        <div className={`${className} bg-white shadow-light card_style`} > {children}</div >
    )
}

export default Card;