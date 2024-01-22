import React from 'react'

const CustomInput = ({ type, name, placeholder, className, id, min }) => {
    return (
        <div className='mb-3'>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                min={min}
                className={`form-control ${className}`}
                id={id}
            />
        </div>
    )
}

export default CustomInput