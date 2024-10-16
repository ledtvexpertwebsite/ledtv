import React from 'react'

function Services({services}) {
  return (
    <div className=' w-full sm:w-1/4 min-h-20 overflow-hidden bg-white my-6 flex flex-col items-center py-10 gap-12'>
     <div className='w-[430px] sm:w-full min-h-32'>
          <img className='w-full h-60 object-cover' src={services.image} />
          <h1 className='text-xl font-medium w-full text-center py-3 bg-[#2E375F] text-white'>{services.title}</h1>
          <p className='text-zinc-500 sm:w-full text-center px-3 leading-6 font-normal mt-6'>{services.des}</p>
          <p className='w-full flex items-center justify-center'><a href={services.number} className=' text-sm mt-3 text-zinc-500 hover:text-zinc-800'><span>Call Us</span><span><i class="ri-phone-fill"></i></span></a></p>
     </div>
    </div>
  )
}

export default Services