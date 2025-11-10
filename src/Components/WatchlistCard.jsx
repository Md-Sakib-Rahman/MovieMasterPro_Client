import React, { useEffect, useState } from "react";
import axiosInstance from "../Axios/Axios";

const WatchlistCard = ({ movieId , onRemove}) => {
  const [movie, setMovie] = useState({});
  const handleRemove = ()=>{
    onRemove(movieId)
  }  
  useEffect(() => {
    const fetchdata = async () => {
      try{
        const data = await axiosInstance.get(`/movies/${movieId}`);
        console.log(data.data)
        setMovie(data.data)
      }
      catch(err){
        console.log(err)
      }
    };
    fetchdata()
  }, [movieId]);
  return (
    <div className="grid grid-cols-3 mx-auto items-center gap-4 w-full my-5">
      <div className="flex justify-start items-center ">
        <img className="w-[120px] h-[120px] object-contain" src={movie.posterUrl} alt="" />
      </div>
      <div className=" text-center">
        <p className="font-bold max-sm:text-sm">{movie.title}</p>
      </div>
      <div className="flex justify-end items-center">
        <button onClick={handleRemove} className="btn btn-primary ">Remove</button>
      </div>
    </div>
  );
};

export default WatchlistCard;
