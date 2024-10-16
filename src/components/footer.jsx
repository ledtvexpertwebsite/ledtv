import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-800 text-zinc-500 pt-16'>
      <span className='sm:flex'>
      <div className=' px-5 flex sm:w-1/3 flex-col'>
        <h1 className='text-xl font-medium mb-6 text-zinc-100'>Contact Us</h1>
        <p className='font-light mb-3'>Bhudhwar Peth Pune - 411002</p>
        <p className='flex gap-3 font-light flex-wrap'><span><a href="tel:+918421119417"><i class="ri-phone-line text-red-500"> </i>+91-8421119417</a></span><span><a href="mailto:vishwaxupte@gmail.com"><i class="ri-mail-line text-red-500"> </i>vishwaxupte@gmail.com</a></span>
        <span><a href="https://ledtvexpert.in"><i class="ri-global-line text-red-500"> </i>ledtvexpert.in</a></span></p>
      </div>
      <div className='flex px-5 sm:w-1/3 flex-col w-full'>
        <h1 className='text-xl font-medium mt-10 sm:mt-0 text-zinc-100'>Useful Links</h1>
        <ul className='w-full py-5'>
          <a href="/"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>Home</li></a>
          <a href="#aboutus"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>About Us</li></a>
          <a href="#services"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>Service</li></a>
          <a href="#whyus"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>Why Us</li></a>
          <a href="#contactus"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>Contact Us</li></a>
        </ul>
      </div>
      <div className='flex px-5 sm:w-1/3 flex-col'>
        <h1 className='text-xl font-medium mt-10 sm:mt-0 text-zinc-100'>Terms & Conditions</h1>
        <ul className='w-full py-5'>
          <a href="#"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>LED SERVICE</li></a>
          <a href="#"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>LCD SERVICE</li></a>
          <a href="#"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>PLASMA LED SERVICE</li></a>
          <a href="#"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>TV SERVICE</li></a>
          <a href="#"><li className='py-2 hover:bg-zinc-900 px-2 border-b border-zinc-600 border-dashed'>CURVED TV SERVICE</li></a>

          <a href="tel:+918421119417"><li className='py-2 mt-8 px-2 border-zinc-600 hover:bg-green-400 hover:text-zinc-800'>Call Us on +91-8421119417</li></a>
        </ul>
      </div>
      </span>
      <div className='w-full min-h-20 bg-zinc-900 p-3'>
        <p className='text-xs'>Copyright © 2024 | All Rights Reserved</p>
        <p className='text-xs mt-2 w-full text-center'><span><a href="./Termsand&Conditions">Terms & Conditions</a></span> | <span><a href="./privacy"> Privacy Policy </a></span> | <span><a href="#"> Disclaimer</a></span></p>
      </div>
    </div>
  )
}

export default Footer