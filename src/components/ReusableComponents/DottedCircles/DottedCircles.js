import React from 'react';
import styled from 'styled-components';

function DottedCircles({position, onClick}) {
  return (
    <DottedCirclesView onClick={onClick}>
        <div className={`dots ${position === 1 && "active"}`}></div>
        <div className={`dots ${position === 2 && "active"}`}></div>
        <div className={`dots ${position === 3 && "active"}`}></div>
    </DottedCirclesView>
  )
}

export default DottedCircles;

const DottedCirclesView = styled.div`
    min-width: 40px;
    max-width: 40px;
    max-height: 8px;
    display: flex;
    justify-content: space-between;
    margin-top: 24px !important;
    margin:auto;
    .dots{
        width: 8px;
        height: 8px;
        background: #E2E8F0;
        border-radius: 100%;
    }
    .active{
        background: #FB5E04 !important;
    }
`;