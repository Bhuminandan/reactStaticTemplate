import React from 'react'

function Navbar() {
  return (
    <div className='w-full py-8 bg-navbg flex items-center justify-between px-5 md:px-20 fixed top-0 border-b-2'>
        <div className="left-nav whitespace-nowrap text-white text-3xl font-semibold">
            Start Tailwind
        </div>
        <div className="right-nav">
            <ul className='items-center justify-center hidden md:flex'>
                <li><a href="#" className='text-white text-xl font-semibold px-4 py-2 rounded-lg hover:text-themegreen hover:duration-300 hover:transition-all'>PORFOLIO</a></li>
                <li><a href="#" className='text-white text-xl font-semibold px-4 py-2 rounded-lg hover:text-themegreen hover:duration-300 hover:transition-all'>ABOUT</a></li>
                <li><a href="#" className='text-white text-xl font-semibold px-4 py-2 rounded-lg hover:text-themegreen hover:duration-300 hover:transition-all'>CONTACT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar