import React, { useContext } from 'react'
import SliderComp from '../Components/SliderComp'
import HomePageStats from '../Components/HomePageStats'
import TopRatedMovies from '../Components/TopRatedMovies'
import { Context } from '../Context/Context'
import GenreSection from '../Components/GenreSection'
import AboutPlatform from '../Components/AboutPlatform'

const HomePage = () => {
  
  return  (
    <div className='pt-20'>
      <SliderComp/>
      <div className='flex flex-col justify-center items-center py-20'>
        <h2 className='font-bold text-3xl border-b-2 border-b-orange-500 mb-10'>Movie Master's Stats</h2>
        <HomePageStats/>
        
      </div>
      <div>
        <p className='font-bold text-3xl border-b-2 border-b-orange-500 mb-10 text-center w-[250px] mx-auto '>Top Rated Movies</p>
        <TopRatedMovies/>
      </div>
      <div>
        <GenreSection/>
      </div>
      <div>
        <AboutPlatform/>
      </div>
    </div>
  )
}

export default HomePage
