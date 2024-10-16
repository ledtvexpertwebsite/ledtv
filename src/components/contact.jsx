import React from 'react'

function Contact() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<div className=' w-full text-center mt-5'>Sending... <i class="ri-mail-send-line text-blue-500"></i></div>);
    const formData = new FormData(event.target);

    formData.append("access_key", "8b3cd706-44c5-4e8c-918d-818d4c87b935");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<div className=' w-full text-center mt-5'>Done <i class="ri-check-double-line text-green-500"></i></div>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contactus' className='flex flex-col gap-20 sm:flex sm:flex-row'>
     <div className='w-full sm:w-1/2'>
          <h1 className='text-2xl font-medium'><span className='underline underline-offset-8'>OUR</span> ADDRESS</h1>
          <ul className='mt-6'>
               <a href="tel:+918421119417"><li className='w-fit pl-2 pr-5 border-b border-dashed border-zinc-800 py-3 text-zinc-500'><i class="ri-phone-line text-red-500"> </i><span className='font-medium text-zinc-600'>Call Us :</span> +91-8421119417</li></a>
               <a href="mailto:vishwaxupte@gmail.com"><li className='w-fit pl-2 pr-5 border-b border-dashed border-zinc-800 py-3 text-zinc-500'><i class="ri-mail-line text-red-500"> </i><span className='font-medium text-zinc-600'>Email Us :</span> vishwaxupte@gmail.com</li></a>
               <a href="148, Kasba Peth, Opp. Peshwa Ganpati,Lal Mahal Chowk,Pune-411011"><li className='w-fit pl-2 pr-5 border-b border-dashed border-zinc-800 py-3 text-zinc-500'><i class="ri-map-2-line text-red-500"> </i><span className='font-medium text-zinc-600'>Bhudhwar Peth Pune - 411002</span></li></a>
          </ul>
     </div>
     <div className='sm:flex sm:flex-col sm:w-1/2'>
     <h1 className='text-2xl font-medium w-full'><span className='underline underline-offset-8'>SEND</span> US A MESSAGE</h1>
     <div className='mt-8 sm:w-1/2'>
      <form onSubmit={onSubmit} className='flex flex-col gap-5 items-center'>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="text" name="name" required placeholder='Enter Name'/>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="email" name="email" required placeholder='Enter Email'/>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="text" name="Subject" required placeholder='Enter Subject'/>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="number" name="phone number" required placeholder='Enter Phone'/>
        <textarea className='border border-zinc-400 px-2 py-2 w-full outline-none' name="message" required placeholder='Enter Message'></textarea>

        <button onClick="https://plick.netlify.com" type="submit" className='py-2 px-8 bg-[#333d6b] text-zinc-100 w-fit uppercase outline-none'>Send Your Message</button>

      </form>
      <span>{result}</span>

    </div>
     </div>
    </div>
  )
}

export default Contact