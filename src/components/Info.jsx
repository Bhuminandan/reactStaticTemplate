import React from 'react'

function Info() {
  return (
    <div className='w-full h-fit flex flex-col items-center justify-start bg-themegreen pb-11'>
        <h1 className='pt-8 text-5xl font-bold text-white'>
            ABOUT
        </h1>
        <div className="para-container flex flex-wrap px-4 items-start justify-center text-white gap-5 mt-10">
            <div className="para max-w-md font-normal text-xl">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
            <div className="para max-w-md font-normal text-xl">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
        </div>
        <button className='mt-16 bg-transparent border-2 py-4 px-8 rounded-xl active:transform active:translate-y-1 hover:bg-navbg hover:duration-300 hover:transition-all hover:text-white cursor-pointer'>FREE DOWNLOAD</button>
    </div>
  )
}

export default Info