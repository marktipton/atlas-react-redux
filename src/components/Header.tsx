import React from 'react'
import  logo  from '../assets/logo.png';

const Header = () => {
  return (
    <div className='sticky top-0 border-b-2 border-blue bg-off-white-light pb-8 pt-8'>
      <img src={logo} alt="atlas logo" className='logo mx-auto w-56'/>
    </div>
  )
}

export default Header