import React from 'react'

const Container = ({ children, className }) => {
    return (
        <section className={`${className} py-lg-5 py-3`}>
            <div className="container-xxl">
                {children}
            </div>
        </section>
    )
}

export default Container