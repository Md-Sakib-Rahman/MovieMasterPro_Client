import React, {  useEffect, useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import axiosInstance from "../Axios/Axios";
const HomePageStats = () => {
  const [stats , setStats] = useState({
    movie_count: 0,
    user_count: 0,
  })
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const movieCount = await axiosInstance.get('/movies?sort=movie_count')
            const userCount = await axiosInstance.get('/users_count')
            setStats({
                movie_count: movieCount.data,
                user_count: userCount.data
            })
        }catch(error){
            console.log(error)
        }
    }
    fetchData()
  }, [])
  return (
    <div className="mx-auto w-1/2 max-md:w-2/3">
      <div className="stats shadow flex justify-center items-center max-md:flex-col ">
        <div className="stat">
          <div className="stat-figure text-primary">
            <BiSolidMoviePlay size={35} />
          </div>
          <div className="stat-title">Total Movies Listed</div>
          <div className="stat-value text-primary">{stats.movie_count}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers size={35}/>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-secondary">{stats.user_count}</div>
        </div>

      </div>
    </div>
  );
};

export default HomePageStats;
