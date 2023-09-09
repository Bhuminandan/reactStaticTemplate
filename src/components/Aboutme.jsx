import React from 'react'
import userImg from '../assets/img/avataaars.svg'

function Aboutme() {
  return (
    <div className='w-full h-screen bg-themegreen flex flex-col items-center justify-start pt-48'>
        <div className="avatar w-full flex items-center justify-center">
            <img src={userImg} alt="user img" className='h-72 mb-10'/>
        </div>
        <div className="heading text-white text-3xl md:text-6xl font-bold">START TAILWIND</div>
        <div className="userinfo">
          <ul className='flex items-center justify-center pt-8'>
            <li className='font-medium text-white text-xl'>Graphic Artist - </li>
            <li className='font-medium text-white text-xl'>Web Designer - </li>
            <li className='font-medium text-white text-xl'>Illustrator</li>
          </ul>
        </div>
    </div>
  )
}

export default Aboutme;