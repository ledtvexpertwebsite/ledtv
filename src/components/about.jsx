import React from 'react'
import aboutimg from '/illustration_01.png'

function About() {
  return (
    <div id='aboutus' className='px-5 py-10 flex flex-col-reverse sm:flex sm:flex-row-reverse sm:items-center'>
      <div className='sm:w-1/2'>
      <h1 className='text-4xl font-semibold mb-10 '> About <span className='text-red-500 font-normal text-3xl'>Us</span></h1>
     <h1 className='text-2xl font-semibold uppercase'>WELCOME TO ledtvexpert</h1>
     <p className='flex flex-col gap-5 text-zinc-600 mt-3 font-normal'>
          <span className='text-lg font-light'>Are you trying to find a professional who can fix your LED TV the best way possible? Then call us!</span>
          <span>LED TV Repairing Service Provide in pune</span>
          <span>All Types LED,LCD TV SMART TV Repair by expert engineers</span>
     </p>
      </div>
          <div className='my-7 sm:w-1/3 sm:mr-10'>
          <img className='sm:w-full' src={aboutimg} />
          </div>
    </div>
  )
}

export default About