import React from "react";
import Cards from "./Cards";

const carddt = [
  {
    icon:<i class="ri-cash-line text-2xl font-light "></i>,
    title:'Low cost',
    des:'We deliver our services on the most affordable pricing.',
  },
  {
    icon:<i class="ri-group-line text-2xl font-light "></i>,
    title:'BEST PROFESSIONAL',
    des:'we mostly focus on customer satisfaction and high-quality services.',
  },
  {
    icon:<i class="ri-tools-line text-2xl font-light "></i>,
    title:'BEST MATERIAL',
    des:'We used in our repairing purpose are 100% genuine parts.',
  },
  {
    icon:<i class="ri-computer-line text-2xl font-light "></i>,
    title:'BEST DIAGONOSTIC',
    des:'We provide the best repairing services.',
  },
  {
    icon:<i class="ri-24-hours-line text-2xl font-light "></i>,
    title:'24/7 SERVICES',
    des:'We can repair or replace your LED TV Panel in no time.',
  },
  {
    icon:<i class="ri-customer-service-line text-2xl font-light "></i>,
    title:'ONLINE SUPPORT',
    des:'You can book your repairing services on call.',
  },
]

function Whyus() {
  return (
    <div id="whyus" className=" whyus w-full min-h-10 bg-white mt-10 px-5 max-w-[1370px]">
    <div className="w-full h-auto bg-white py-20 flex flex-col gap-10 items-center text-zinc-100 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
  <h1 className="text-3xl font-semibold w-full py-4 px-3 bg-white text-zinc-800">Why <span className="text-red-600">Choose <a href="https://ledtvexpert.in">ledtvexpert.in</a></span></h1>
  
  {carddt.map((item, index) => (
    <Cards carddt={item}/>
  ))}
  </div>
</div>
  );
}

export default Whyus;
