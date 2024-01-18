import React from 'react'

const CustomInput = ({ type, name, placeholder, className, id }) => {
    return (
        <div className='mb-3'>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
                id={id}
            />
        </div>
    )
}

export default CustomInput