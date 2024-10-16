import React from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bg1 from '/bg1.jpg'
import bg2 from '/bg3.png'
import bg3 from '/bg4.png'

function Top() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full h-full'><img className='w-full h-full object-cover object-center' src={bg2} />
          <div className='absolute bg-zinc-900/30 top-0 left-0 w-full h-full flex flex-col items-start sm:items-center px-3 justify-center'>
          <h1 className='text-5xl uppercase font-medium'>Repair service</h1>
          <p className='px-10 py-2 bg-[#2E375F]/90 mt-3 rounded relative text-base font-light before:absolute before:w-2 before:h-full before:bg-red-600 before:left-0 before:top-0 uppercase'>the best LED/LCD repair Services</p>
          <p className='text-sm font-light leading-5 mt-2 text-start'>We provided our best services for our clients and try to achieve our clint's trust and satisfaction.</p>
          <a href="tel:+918421119417" className='px-8 py-1 text-sm font-light rounded bg-[#2E375F] mt-4 relative before:absolute before:w-2 before:h-full before:bg-red-600 before:left-0 before:top-0'>Call Now</a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' overflow-hidden w-full h-full'><img className='w-full h-full object-cover object-bottom' src={bg1} />
          <div className='absolute bg-zinc-800/30 top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
          <p className='bg-red-600  px-1 h-10 flex items-center overflow-hidden rounded-full text-base font-light'><span className=' bg-[#2E375F] flex items-center justify-center rounded-full w-full px-10 h-10'>We are alwase provide you</span></p>
          <h1 className='px-7 py-2 rounded bg-[#2E375F]/90 mt-2 uppercase font-medium'>LED/ LCD tv perair services</h1>
          <p className='text-base font-light leading-5 mt-2 text-center px-5'>We provided our best services for our clients and try to achieve our clint's trust and satisfaction.</p>
          <a href="tel:+918421119417" className='px-10 py-1 text-base rounded-full border mt-6'>Call Now</a>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full relative'><img className='w-full h-full object-cover object-center' src={bg3} />
          <div className='absolute bg-zinc-800/30 top-0 left-0 w-full h-full px-3 flex flex-col items-end sm:items-center justify-center'>
          <h1 className='px-14 py-2 rounded bg-[#2E375F]/90 text-3xl relative uppercase before:absolute before:w-2 before:h-full before:bg-red-600 before:right-0 before:top-0'>TV repair service</h1>
          <p className=' py-2 rounded-full text-xl font-medium uppercase'>Best services</p>
          <p className='text-sm font-light leading-5 text-end pl-14 w-96 pr-2'>We provided our best services for our clients and try to achieve our clint's trust and satisfaction.</p>
          <a href="tel:+918421119417" className='px-6 py-1 relative text-sm font-light rounded mt-6 bg-[#2E375F] before:absolute before:w-2 before:h-full before:bg-red-600 before:right-0 before:top-0'>Call Now</a>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Top