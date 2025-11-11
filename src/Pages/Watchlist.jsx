import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import axiosSecureInstance from '../Axios/AxiosSecure'
import WatchlistCard from '../Components/WatchlistCard'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const Watchlist = () => {
  const {user} = useContext(Context)
  const [watchlistArr , setWatchlistArr] =useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      
      try{
        const data = await axiosSecureInstance.get('/user')
        const watchlist = [...data.data.watchlist]
        console.log(watchlist)
        setWatchlistArr(watchlist)
      }catch(err){
        console.log(err)
      }

    }
    fetchData()
  },[])
  const handleRemoveMovie = async (movieId) => {
    try {
      await axiosSecureInstance.patch('/users/remove-from-watchlist', { movieId });
      setWatchlistArr(currentWatchlist => 
        currentWatchlist.filter(id => id !== movieId)
      );
      toast.success("Movie removed successfully!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                              });
    } catch (err) {
      console.error("Failed to remove movie:", err);
      toast.error("Error removing movie from watchlist", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
    }
  }
  return (
    <div className='pt-20 min-h-screen'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h2 className='text-center border-b-2 border-b-orange-500 w-[150px] mx-auto font-bold text-xl my-20'>Your Watchlist</h2>
      <div className='w-[80%] max-sm:w-[95%] mx-auto'>
        {
          watchlistArr.length ===0 ? (
            <p>watch list is empty</p>
          ): (
            watchlistArr.map((movieId) => <WatchlistCard key={movieId} movieId={movieId} onRemove={handleRemoveMovie}/>)
          )
          
        }
      </div>
    </div>
  )
}

export default Watchlist
