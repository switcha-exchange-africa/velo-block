import React, { useRef, useEffect, useCallback } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  z-index: 100000;
`;

const ModalWrapper = styled.div`
    width: 833px;
    margin: auto;
    min-height: 532px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    color: #000;
    display: flex;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    border: 1px solid white;
    padding: 64px 30px;
    @media only screen and (max-width: 962px) {
        width: 90%;
        margin: auto;
    }
`;

export const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();

//   const animation = useSpring({
//     config: {
//       duration: 250
//     },
//     opacity: showModal ? 1 : 0,
//     transform: showModal ? `translateY(0%)` : `translateY(-100%)`
//   });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div >
            <ModalWrapper showModal={showModal}>
              {children}
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;