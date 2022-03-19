import React, {useState, useEffect} from 'react';
import SwitchaScreen from './SwitchaScreen';
import WelcomeScreen from './WelcomeScreen';

function Welcome() {
  const [page, setPage]= useState(1)
  const switchScreen= ()=>{
    setTimeout(()=>{
      setPage(2)
    },2000)
  }

  useEffect(()=>{
    switchScreen()
  },[])
  return (
    <>
      {page === 1 &&(
        <SwitchaScreen onClick={()=> setPage(2)}/>
      )}
      {page === 2 && (
        <WelcomeScreen/>
      )}
    </>
  )
}

export default Welcome