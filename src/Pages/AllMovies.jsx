import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../Axios/Axios";
import Card from "../Components/Card";
import { Context } from "../Context/Context";

const AllMovies = () => {
  const {genreFromHome} = useContext(Context)
  const genres = ["Action", "Drama", "Comedy", "Sci-Fi", "Thriller", "Animation", "Crime"];
  const [movies, setMovies] = useState([]);
  const [movieLoader, setMovieLoader] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(genreFromHome );
  const [minRating, setMinRating] = useState("");
  
  const [filters, setFilters] = useState({
    genre: genreFromHome || "",
    minRating: "",
  });
  useEffect(() => {
    
    console.log("genre from home", genreFromHome)
    const fetchData = async () => {
      try {
        setMovieLoader(true);
        const params = new URLSearchParams();
        if (filters.genre) {
          params.append("genre", filters.genre);
        }
        if (filters.minRating) {
          params.append("minRating", filters.minRating);
        }
        const movies = await axiosInstance.get(`/movies?${params.toString()}`);
        // console.log(movies.data)
        setMovies(movies.data);
      } catch (error) {
        console.log(error);
      } finally {
        setMovieLoader(false);
      }
    };
    fetchData();
  }, [filters]);

  const handleFilter = () => {
    
    setFilters({
      genre: selectedGenre,
      minRating: minRating,
    });
  };
  const handleClear = () => {
   
    setSelectedGenre('');
    setMinRating('');
    
    setFilters({
      genre: '',
      minRating: '',
    });
  };
  const handleGenreClick = (genre) => {
    setSelectedGenre(prev => prev === genre ? '' : genre);
  };
  return movieLoader ? (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner text-warning w-10"></span>
    </div>
  ) : (
    //
    <div className="pt-20 px-10 ">
      <h2 className="text-center font-bold text-3xl border-b-2 border-b-orange-500 w-[150px] mx-auto mt-10">
        All movie
      </h2>
      <div className='flex flex-col items-center justify-center gap-4 my-8 p-4 bg-base-200 rounded-lg w-[90%] md:w-[60%] mx-auto'>
        <div className="flex flex-wrap justify-center gap-2">
          {genres.map(genre => (
            <button
              key={genre}
              className={`btn btn-sm ${selectedGenre === genre ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="number"
            placeholder="Min Rating (e.g., 7)"
            className="input input-bordered"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleFilter}>
            Apply Filters
          </button>
          <button className="btn btn-ghost" onClick={handleClear}>
            Clear All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 my-10 max-w-[1280px] mx-auto">
        {movies.map((movie) => {
          return <Card key={movie._id} data={movie} />;
        })}
      </div>
    </div>
  );
};

export default AllMovies;
