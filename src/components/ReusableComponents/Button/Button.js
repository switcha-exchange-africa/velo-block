import React from 'react';
import styled from 'styled-components';

function Button({inverted, text, onClick, small, className, noBorder, inActive, }) {
  const clickItem =() => {
    if(!inActive){
      onClick()
    }
  }
  return (
    <ButtonView small={small} inverted={inverted} onClick={clickItem} className={className} noBorder={noBorder} inActive={inActive} >
      <span>  {text} </span>
    </ButtonView>
  )
}

export default Button;

const ButtonView = styled.div`
  width: ${props => props.small ? "142px" : "100%"};
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  border-radius: 4px;
  border: ${props => props.noBorder ?  "" : "1px solid #FB5E04"};
  color: ${props => props.inverted ? "#FB5E04" : "#ffffff"};
  background: ${props => props.inverted ? "#ffffff" : props.inActive ? "#C0C0C0":"#FB5E04"};
  margin: auto;
  cursor: pointer;
`;