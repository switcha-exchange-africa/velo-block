import React from 'react';
import styled from 'styled-components';

function Button({inverted, text, onClick, small, className, noBorder}) {
  return (
    <ButtonView small={small} inverted={inverted} onClick={onClick} className={className} noBorder={noBorder}>
        {text}
    </ButtonView>
  )
}

export default Button;

const ButtonView = styled.div`
    width: ${props => props.small ? "142px" : ""};
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    border-radius: 16px;
    border: ${props => props.noBorder ?  "" : "1px solid #FB5E04"};
    color: ${props => props.inverted ? "#FB5E04" : "#ffffff"};
    background: ${props => props.inverted ? "#ffffff" : "#FB5E04"};
    margin: auto;
`;