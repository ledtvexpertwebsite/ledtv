import React, { useEffect } from 'react'

function Nav() {
     useEffect(()=>{
          document.querySelector('#menubtn').addEventListener('click', ()=>{
               document.querySelector('#link').style.height = '250px';
               document.querySelector('#id01213').style.height = 'auto';
               document.querySelector('#link').style.display = 'block';
               document.querySelector('#menubtn').style.display = 'none';
               document.querySelector('#closemenu').style.display = 'block';document.getElementById("link").style.transition = "all 1s";
          })
          document.querySelector('#closemenu').addEventListener('click', ()=>{
               document.querySelector('#link').style.height = '0px';
               document.querySelector('#id01213').style.height = '0px';
               document.querySelector('#link').style.display = 'none';
               document.getElementById("link").style.transition = "all ease 0.5s";
               document.querySelector('#menubtn').style.display = 'block';
               document.querySelector('#closemenu').style.display = 'none';
          })
          
     })
  return (
    <div className=' w-full min-h-36 pt-6 bg_nav flex flex-col items-center justify-center text-zinc-800 sm:z-50 sm:flex-row sm:px-5 sm:gap-10 sm:min-h-20'>
     <span className='flex flex-col w-full items-center sm:px-10 sm:flex sm:flex-row sm:justify-start sm:gap-10'>
     <span className=''>
     <h1 className='text-3xl font-semibold uppercase sm:text-xl'>LED-TV-EXPERT</h1>
     <h2 className='font-medium text-xl mb-5 sm:text-sm sm:font-normal'>LED REPAIRING EXPERT</h2>
     </span>
     <span>
     <a href="tel:+918421119417" className='flex flex-col'> <span className='flex items-center'><span className="material-symbols-outlined ">call</span><span className='sm:text-sm'>+91-8421119417</span></span> <span className=''>Call us for more details</span></a>
     </span>
     </span>
     <div className="navdiv relative mt-0 py-[6px] px-[20px] justify-end items-center flex sm:h-[60px] sm:justify-center sm:items-start sm:w-full bg-[#2E375F] sm:bg-transparent">
     <button><i class="ri-menu-line menubtn sm:hidden" id='menubtn'></i><i class="ri-close-fill menubtn hidden sm:hidden" id='closemenu'></i></button>
     <div class="link" id='link' className=' h-0 hidden sm:block sm:text-zinc-100 absolute top-full right-5 z-50 sm:relative sm:top-auto sm:left-auto'>
          <ul className='sm:flex sm:gap-4 h-0 p-4 rounded-lg sm:p-0 sm:h-10 sm:bg-transparent overflow-hidden bg-white' id='id01213'>
               <li className='sm:text-[#2E375F] sm:hover:text-blue-600'><a href="/">Home</a></li>
               <li className='sm:text-[#2E375F] sm:hover:text-blue-600'><a href="#aboutus">About Us</a></li>
               <li className='sm:text-[#2E375F] sm:hover:text-blue-600'><a href="#whyus">Why Us</a></li>
               <li className='sm:text-[#2E375F] sm:hover:text-blue-600'><a href="#services">Services</a></li>
               <li className='sm:text-[#2E375F] sm:hover:text-blue-600'><a href="#contactus">Contact Us</a></li>
          </ul>
     </div>
    </div>
    </div>
  )
}

export default Nav