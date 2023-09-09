import React from 'react'

function Footer() {
  return (
    <div className='w-full h-auto pt-10 bg-themelightblue text-white'>
        <div className="footer-top flex flex-wrap gap-10 flex-col md:flex-row items-center justify-between px-10 py-10 md:px-20 md:py-20 text-center">
            <div className="footer-top-left flex-1">
                <div className="left-top font-medium text-2xl">LOCATION</div>
                <div className="left-bottom font-medium ">
                2215 John Daniel Drive
                 Clark, MO 65243
                </div>
            </div>
            <div className="footer-top-middle flex-1">
                <div className="left-top font-medium text-2xl">AROUND THE WEB</div>
                <div className="left-bottom font-medium ">SOCIAL ICONS</div>
            </div>
            <div className="footer-top-right flex-1">
                <div className="left-top font-medium text-2xl">ABOUT FREELANCER</div>
                <div className="left-bottom font-medium">
                Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" className='text-themegreen underline cursor-pointer'>Start Bootstrap .</a> 
                </div>
            </div>
        </div>
        <div className="footer-bottom bg-themedarkblue text-center w-full h-full py-5">Copyright © Your Website 2023</div>
    </div>
  )
}

export default Footer