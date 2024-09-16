import React from 'react'
import  logo  from '../assets/logo.png';

const Header = () => {
  return (
    <div className='bg-orange-50 flex-initial w- items-center'>
      <img src={logo} alt="atlas logo" className='object-cover h-auto w-12'/>
    </div>
  )
}

export default Header