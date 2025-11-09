import React, { useEffect, useState } from "react";
import Card from "./Card";
import axiosInstance from "../Axios/Axios";
import { Fade } from "react-awesome-reveal";
const TopRatedMovies = () => {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosInstance.get("/movies?sort=top_rated");
        // console.log(data.data)
        setTopRated(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-auto w-[90%] gap-10">
          {topRated.map((data) => (
            <Card key={data._id} data={data} />
          ))}
        </div>
      
    </div>
  );
};

export default TopRatedMovies;
