import React from "react";
import styled from "styled-components";

function SearchField({type, placeholder, className, onChange, min, value, max, label, bodyClass, name, onClick, autocomplete}) {
  return ( 
        <div className = {`form-section ${bodyClass}`} onClick={onClick}>
            {label && (<div className=" white mt-4"> {label}</div>)}
            <input
                id = "Bullets"
                className= {`${className}`}
                placeholder={placeholder}
                type= {type}
                onChange={onChange}
                value={value}
                min={min}
                name={name}
                autoComplete={autocomplete? autocomplete: "on"}
            />
        </div>
    )
}

export default SearchField;

const SearchFieldView = styled.div`

`;
