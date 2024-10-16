import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Nav from './nav'
import Footer from './footer'
import About from './about'
import Whyus from './whyus'
import Services from './services'
import serv5 from '/s6.png'
import customsunil from '/customsunil.jpg'
import customsunil2 from '/customsunil2.jpg'
import customsunil3 from '/customsunil3.jpg'
import s5 from '/s5.png'
import comentimg from '/User-img.png'
import Comments from './comments'
import Socialnumbers from './socialnumbers'
import Contact from './contact'
import AutoSlideDiv from './top'
import Top from './top'

function Home() {
  const services = [
    {
      image:s5,
      title:'LED SERVICE',
      des:'With enriched market experience, we have been able to offer a wide spectrum of LED Service.',
      number:'tel:8421119417',
    },
    {
      image:customsunil,
      title:'LED SERVICE',
      des:'We provided repairing services.also we deal in used computer, lcd, led tv services.',
      number:'tel:8421119417',
    },
    {
      image:customsunil2,
      title:'PLASMA LED SERVICE',
      des:'Plasma LED Services We are one of the renowned ledtvexpert of Plasma LED Services.',
      number:'tel:8421119417',
    },
    {
      image:customsunil3,
      title:'TV SERVICE',
      des:'With enriched market experience, we have been able to offer a wide spectrum of LED Service.',
      number:'tel:8421119417',
    },
    {
      image:serv5,
      title:'CURVED TV SERVICE',
      des:'With enriched market experience, we have been able to offer a wide spectrum of LED Service.',
      number:'tel:8421119417',
    },
  ];
  const comment = [
    {
      name:'Abhay',
      comment:'I have Six-year-old  LED TV. The other service center also refused to repair. Thankfully I called this repair ledtvexpert and they were able to resolve the issue.',
      type:'Customer',
      rate:'4.5',
      icon:{
        _1:<i class="ri-star-fill "></i>,
        _2:<i class="ri-star-fill "></i>,
        _3:<i class="ri-star-fill "></i>,
        _4:'',
      },
      iconh:<i class="ri-star-half-line"></i>,
      image:comentimg,
    },
    {
      name:'Sonu',
      comment:'The best part is that the person, who came to our house for inspection of our TV, repaired the minor fault at our home only. It saved our time and hassle of taking TV to market.',
      type:'Customer',
      rate:'4.5',
      icon:{
        _1:<i class="ri-star-fill "></i>,
        _2:<i class="ri-star-fill "></i>,
        _3:'',
        _4:'',
      },
      iconh:<i class="ri-star-half-line"></i>,
      image:comentimg,
    },
    {
      name:'Komal',
      comment:'I have Three year old  LED TV. The other service center also refused to repair. Thankfully I called this repair ledtvexpert and they were able to resolve the issue.',
      type:'Customer',
      rate:'4.5',
      icon:{
        _1:<i class="ri-star-fill "></i>,
        _2:<i class="ri-star-fill "></i>,
        _3:<i class="ri-star-fill "></i>,
        _4:'',
      },
      iconh:<i class="ri-star-half-line"></i>,
      image:comentimg,
    },
  ];
  return (
    <div>
     <Nav/>
     <a href="tel:+918421119417" className=' absolute'><div className=' calledshdw fixed size-16 bottom-24 right-5 rounded-full bg-green-600 animate-bounce z-[99] flex items-center justify-center text-zinc-50 text-3xl'><i class="ri-phone-fill"></i></div></a>
     <a href="https://wa.me/+918421119417?text=I%20have%20problem%20with%20my%20LED%20TV" className=' absolute'><div className=' calledshdw fixed size-16 bottom-5 right-5 rounded-full bg-green-600 animate-bounce z-[99] flex items-center justify-center text-zinc-50 text-3xl'><i class="ri-whatsapp-line"></i></div></a>
     <div>
      <Top/>
     </div>
     <About/>
     <div className=' w-full flex items-center justify-center'>
     <Whyus/>
     </div>
     <div  id='services' className='py-5 '>
     <h1 className='text-2xl w-full mt-8 text-center font-semibold'>Our <span className='text-red-500'>Services</span></h1>
     <span className='sm:flex sm:flex-row sm:gap-7 sm:flex-wrap sm:items-center sm:justify-center'>
     {services.map((item, index)=>(
      <Services services={item}/>
     ))}
     </span>
     </div>
     <div>
      <Socialnumbers/>
     </div>
     <div>
      <h1 className='text-2xl font-semibold w-full text-center'>What <span className='text-red-500'>Clients Say?</span></h1>
      <div className=' displayx w-full relative flex items-center mt-10 justify-start px-2'>
       <div className='flex gap-5 card py-2 items-start justify-start'>
       {comment.map((item, index)=>(
          <Comments comment={item}/>
        ))}
       </div>
      </div>
     </div>
     <div className='w-full h-60 bg-zinc-800 p-5 mt-20 mb-10 flex flex-col items-center justify-center'>
        <h1 className='text-zinc-100 text-3xl text-center font-semibold'>WOULD YOU LIKE TO <span className='text-red-600'>KNOW MORE?</span></h1>
        <div className='flex items-center justify-center'>
          <a href="tel:+918421119417" className='uppercase text-xl font-semibold text-zinc-100 bg-red-600 mt-5 px-3 py-1'>Call us</a>
        </div>
     </div>
     <div className='w-full min-h-20 py-10 px-7'>
      <Contact/>
     </div>
     <Footer/>
     </div>
  )
}

export default Home