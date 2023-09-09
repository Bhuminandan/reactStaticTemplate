import React from 'react'

function Contact() {
  return (
    <div className='w-full h-auto py-20 bg-themedarkblue flex flex-col items-center justify-center text-white'>
         <h1 className='pt-8 text-5xl font-bold text-white'>
            CONTACT ME
        </h1>
        <form action="" className='w-full px-4 md:py-8w-full md:w-1/2'>
            <label class="block w-full h-full">
                <span class="block font-medium text-slate-700 py-5 text-lg  ">Full Name *</span>
                <input type="text" class="peer ... w-full bg-transparent outline-none text-white border-b-2 border-white"/>
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid Name.
                </p>
            </label>
            <label class="block w-full h-full">
                <span class="block font-medium text-slate-700 py-5 text-lg  ">Email Adress *</span>
                <input type="email" class="peer ... w-full bg-transparent outline-none text-white border-b-2 border-white"/>
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid email address.
                </p>
            </label>
            <label class="block w-full h-full">
                <span class="block font-medium text-slate-700 py-5 text-lg  ">Phone Number *</span>
                <input type="tel" class="peer ... w-full bg-transparent outline-none text-white border-b-2 border-white"/>
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid Phone Number.
                </p>
            </label>
            <label class="block w-full h-full">
                <span class="block font-medium text-slate-700 py-5 text-lg  ">Message *</span>
                <input type="textarea" class="peer ... w-full bg-transparent outline-none text-white border-b-2 border-white"/>
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                      Please provide a valid Message. 
                </p>
            </label>
            <button className='bg-themegreen py-4 px-6 rounded-lg'>SEND</button>
        </form>
    </div>
  )
}

export default Contact