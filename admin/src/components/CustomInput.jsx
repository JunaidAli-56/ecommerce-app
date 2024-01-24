import React from 'react'

const CustomInput = ({ type, name, placeholder, className, id, min, value, onChange, onBlur }) => {
    return (
        <div className='mt-3'>
            <input
                id={id}
                min={min}
                type={type}
                name={name}
                value={value}
                className={`form-control ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onChange}
            />
        </div>
    )
}

export default CustomInput