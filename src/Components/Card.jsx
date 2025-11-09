import React from 'react'
import { Fade } from "react-awesome-reveal";
import { LiaStarSolid } from "react-icons/lia";
function Card({data}) {
  const {title , rating, genre, releaseYear, posterUrl}  = data;
  return (
    <Fade
            delay={200} // Wait 200ms before starting
            duration={1000} // Animation lasts 1 second
            triggerOnce // Only animate once
            fraction={0.5} // Start animation when element is 50% visible
          >
    <div className='w-[240px] h-[390px] mx-auto hover:w-[250px] transition-all ease-in-out duration-100' > 
      <img className='h-[295px] w-full object-cover' src={posterUrl} alt="" />
      <div className='flex justify-between items-center text-[12px] mt-2'>
        
        <div className='flex justify-start items-center gap-2 '>
            <p> {rating}  </p>
            <LiaStarSolid className='text-primary' size={15}/>
        </div>
        
        <p>{releaseYear}</p>
        <p className='bg-primary px-2  rounded-2xl text-black'>{genre}</p>
        
      </div>
      <div className='w-full flex justify-center'>
        <h2 className='text-md font-bold  ' >{title}</h2> 
      </div> 
      <div className='w-full flex justify-center'>
        <button className='btn hover:btn-primary'>Show Details</button>
      </div> 
    </div>
    </Fade>
  )
}

export default Card