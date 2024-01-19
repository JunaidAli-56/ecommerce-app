import React from 'react'

const Container = ({ children, className }) => {
    return (
        <section className={`${className}`}>
            <div className="container-xxl">
                {children}
            </div>
        </section>
    )
}

export default Container