import React from 'react'

function Input({type, placeholder, className, onChange, min, value, max, label, bodyClass, name}) {
    return (
        
        <div className = {`form-section ${bodyClass}`}>
            {label && (<div className=" white mb-10"> {label}</div>)}
            <input
                id = "Bullets"
                className= {`${className}`}
                placeholder={placeholder}
                type= {type}
                onChange={onChange}
                value={value}
                min={min}
                name={name}
            />
        </div>
    )
}

export default Input
