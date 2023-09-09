import React from 'react'

function Portfoliocard({imgsrc}) {
  return (
    <div className="card w-96 rounded-lg overflow-hidden bg-themegreen cursor-pointer">
        <img src={imgsrc} alt="card img" className='w-full h-full object-cover hover:transition-all hover:duration-300 hover:opacity-20'/>
    </div>
  )
}

export default Portfoliocard