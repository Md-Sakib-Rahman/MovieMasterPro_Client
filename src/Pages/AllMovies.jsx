import React, { useEffect, useState } from 'react'
import axiosInstance from '../Axios/Axios'
import Card from '../Components/Card'

const AllMovies = () => {
    
  const [movies , setMovies] = useState([])
  const [movieLoader , setMovieLoader] = useState(true)
  useEffect(()=>{
    const fetchData = async()=>{
        try{
            const movies = await axiosInstance.get('/movies')
            console.log(movies.data)
            setMovies(movies.data)
            
        }catch(error){
            console.log(error)
        }finally {
        setMovieLoader(false)
      }
    }
    fetchData()
  },[])  
  return movieLoader ? (
    <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-spinner text-warning w-10"></span>
    </div>
  ) : (
    // 
    <div className='pt-20'>
      <h2 className='text-center font-bold text-3xl border-b-2 border-b-orange-500 w-[150px] mx-auto mt-10'>All movie</h2>
      <div className='grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 my-10'>

        {
            movies.map((movie)=>{
               return (<Card key={movie._id} data={movie} /> )
            })
        }

      </div>
    </div>
  )
}

export default AllMovies
