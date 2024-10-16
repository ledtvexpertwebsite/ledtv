import React from 'react';
import illustration_02 from '/illustration_02.png';
import illustration_04 from '/illustration_05.png';

function Cards({carddt}) {
  return (
    <div id='whcard' className=' bg-[#865d41] py-10 overflow-hidden rounded-xl cursor-pointer'>
      <img className='absolute size-20 z-10 top-5 right-4 opacity-60' src={illustration_02} />
      <img className='absolute w-full h-full object-cover z-0 top-0 right-0 opacity-20' src={illustration_04} />
     <div className="w-72 h-60 flex px-5 flex-col items-center relative">
       <div id='icon' className="icon size-12 border-zinc-400 rounded-full cursor-pointer transition-all flex items-center justify-center bg-[#2E375F]">
         <i>{carddt.icon}</i>
       </div>
       <h1 className="title text-2xl text-black font-medium mt-7 uppercase">{carddt.title}</h1>
       <div className="des text-black mt-5 font-normal flex-wrap text-center px-8">{carddt.des}</div>
     </div>
     </div>
  )
}

export default Cards