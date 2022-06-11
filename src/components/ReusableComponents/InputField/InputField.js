import React from 'react';
import styled from 'styled-components';

function InputField({type, placeholder, className, onChange, min, value, max, label, bodyClass, name, onClick, autocomplete, small, readOnly, step}) {
  return (
    <InputFieldView small={small}>
        <div className = {`label ${bodyClass}`}>{label}</div>
        <div className = {`form-section ${bodyClass}`} onClick={onClick}>
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
                readOnly={readOnly}
                step={step}
            />
        </div>
    
    </InputFieldView>
  )
}

export default InputField;

const InputFieldView = styled.div`
    width: 100% !important;
    .form-section{
        background: #FFFFFF;
        border: 1px solid #CED4DA;
        box-sizing: border-box;
        border-radius: 4px;
        height: 56px;
        width: ${props => props.small && "150px !important"}
        
    }
    .formInput {
        display: flex;
        justify-content: center;
        background: #FFFFFF;
        padding: ${props => props.small ? "15px" : "15px 30px"};
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.5);
        border: none;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        font-size: 14px;
        line-height: 140%;
        color: #8E9BAE;
    }
    .form-section{
        width: 100%
    }

    input :focus {
        outline: none !important;
        border: 1px solid "#ffffff" ;
    }
    input{

    
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #8E9BAE;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #8E9BAE;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #8E9BAE;
        }

        :-webkit-autofill{
            -webkit-text-fill-background: #ffffff !important;
        }
    }
    .label {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #334155;
    }
`;