import React, { useEffect } from 'react';
import Monitor from '/Screen-Curve.svg';
import Like from '/Like-1.svg';
import Phone from '/Phone-Mobile.svg';
import User from '/user.svg';
import {useSpring, animated} from "react-spring";


function Number({n}) {
  const {number} = useSpring({
    from: {number:0},
    number: n,
    delay: 3000,
    config:{mass:1, tension:20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}



function Socialnumbers() {
  return (
    <div id='socialani' className=' py-16 px-3 flex flex-col gap-20 sm:flex sm:flex-row sm:justify-center'>
     <div className=' items-center  flex flex-col'>
          <div className='w-fit flex flex-col items-center justify-center'>
               <img src={Monitor} className='h-20'/>
          <p className='text-4xl mt-5'><Number n={2763} /></p>
          <h1 className='text-xl font-medium' >LED /LCD SERVICED</h1>
          </div>
     </div>
     <div className=' items-center  flex flex-col'>
         <div className='w-fit flex flex-col items-center justify-center'>
           <img src={User} className='h-20'/>
          <p className='text-4xl mt-5'><Number n={2120} /></p>
          <h1 className='text-xl font-medium'  >HAPPY CLIENTS</h1>
         </div>
     </div>
     <div className=' items-center  flex flex-col'>
         <div className='w-fit flex flex-col items-center justify-center'>
           <img src={Like} className='h-20'/>
          <p className='text-4xl mt-5'><Number n={2125} /></p>
          <h1 className='text-xl font-medium'  >PEOPLE LIKES</h1>
         </div>
     </div>
     <div className=' items-center flex flex-col'>
         <div className='w-fit flex flex-col items-center justify-center'>
           <img src={Phone} className='h-20'/>
          <p className='text-4xl mt-5'><Number n={2139} /></p>
          <h1 className='text-xl font-medium'  >TV SERVICED</h1>
         </div>
     </div>
     </div>
  )
}

export default Socialnumbers