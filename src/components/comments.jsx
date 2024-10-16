import React from 'react'
import illustration_04 from '/illustration_05.png'

function Comments({comment}) {
  return (
    <div className='commentcard bg-[#816745] relative w-[90vw] sm:w-1/3 p-4 rounded-xl text-zinc-100 text-sm'>
      <img className='absolute w-full h-full object-cover z-0 top-0 right-0 opacity-20' src={illustration_04} />
     <div className='flex items-center mt-1 relative'>
          <img className='rounded-full size-24' src={comment.image} />
          <div className='flex flex-col items-start justify-start h-24 w-full px-4'>
               <h1 className='font-medium text-red-500'>{comment.name}</h1>
               <p className='font-medium text-zinc-300'>{comment.type}</p>
               <i className='font-extraligh text-sm text-yellow-500'>{comment.icon._1} {comment.icon._2} {comment.icon._3} {comment.icon._4} {comment.iconh}</i>
          </div>
     </div>
     <p className='italic px-2 line-clamp-4 mt-3 text-wrap relative'>"{comment.comment}"</p>
    </div>
  )
}

export default Comments