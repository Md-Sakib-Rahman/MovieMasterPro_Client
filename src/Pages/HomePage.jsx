import React from 'react'
import SliderComp from '../Components/SliderComp'
import HomePageStats from '../Components/HomePageStats'

const HomePage = () => {
  return (
    <div className='pt-20'>
      <SliderComp/>
      <div className='flex flex-col justify-center items-center py-20'>
        <h2 className='font-bold text-3xl border-b-2 border-b-orange-500 mb-10'>Movie Master's Stats</h2>
        <HomePageStats/>
        
      </div>
    </div>
  )
}

export default HomePage
