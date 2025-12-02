// Example React component for the Genre Section

import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router";

const GenreSection = () => {
  const {setGenreFromHome} = useContext(Context)
  const navigate = useNavigate()
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Thriller",
    "Animation",
    "Horror",
    "Romance",
  ];

  return (
    <div className="py-12  my-20">
      <h2 className="text-3xl font-bold text-center mb-20 text-primary">Browse by Genre</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {genres.map((genre , index) => (
          <div onClick={()=> {
            
            setGenreFromHome(genre)
            navigate("/allmovies")
            }} key={index}  className="btn btn-outline btn-primary">
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;