import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import axiosInstance from "../Axios/Axios";
import { Context } from "../Context/Context";
import axiosSecureInstance from "../Axios/AxiosSecure";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loader, setLoader] = useState(true);
  const [movieToDelete, setMovieToDelete] = useState(null);
  const { user } = useContext(Context)
  console.log(user);
  const navigate = useNavigate()

  const addToWatchlist = async () => {
    try {
      const res = await axiosSecureInstance.post("/users/add-to-watchlist", {
        movieId: id,
      });
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  const openDeleteModal = (movie) => {
    setMovieToDelete(movie);
    document.getElementById("delete_modal").showModal();
  };

  const handleConfirmDelete = async () => {
    if (!movieToDelete) return

    try {
      await axiosSecureInstance.delete(`/movies/${movieToDelete._id}`)
      
    } catch (error) {
      console.error("Error deleting movie:", error);

    }finally {
      setMovieToDelete(null); 
      document.getElementById('delete_modal').close(); 
      navigate('/mycollection')
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosInstance.get(`/movies/${id}`)
        // console.log(data.data);
        setMovie(data.data)
        setLoader(false)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [id, setMovie]);
  const handleGoBack = () => {
    navigate(-1);
  };

  return loader ? (
    <div className="pt-20 w-full min-h-screen flex flex-col items-center justify-center">
      <span className="loading loading-spinner text-warning w-10"></span>
    </div>
  ) : (
    <>
      <div className="pt-20 w-full min-h-screen flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto mb-4">
          <button
            onClick={handleGoBack}
            className="btn btn-outline btn-primary"
          >
            &larr; Go Back
          </button>
        </div>
        <div className="flex justify-center items-base w-[80%] mx-auto gap-2 max-md:flex-col max-md:w-full max-md:items-center max-md:mb-10">
          <div className="w-[400px] max-xl:w-[300px]">
            <img className="object-cover w-full" src={movie.posterUrl} alt="" />
          </div>
          <div className="w-[400px] max-xl:w-[300px] px-10 pt-10 max-xl:px-2 max-xl:pt-2">
            <h2 className="font-bold text-xl">{movie.title}</h2>
            <div className="flex items-center justify-between mt-5 max-xl:mt-2 text-sm">
              <p className="bg-primary px-2  rounded-2xl text-black">
                {movie.genre}
              </p>
              <p className="font-bold">Release Date: {movie.releaseYear}</p>
            </div>
            <div className="flex items-center justify-between mt-5 max-xl:mt-2 text-sm">
              <p className="text-gray-600">{movie.plotSummary}</p>
            </div>
            <div className="flex flex-col items-start justify-between mt-5 max-xl:mt-2 text-sm">
              <p>
                
                <span className="font-bold">Cast:</span>
                <span className=" text-orange-800">{movie.cast}</span>
              </p>
              <p className="mb-4">
                
                <span className="font-bold ">Director:</span>
                <span className=" text-orange-800">{movie.director}</span>
              </p>
              <p>
                
                <span className="font-bold">Country:</span>
                <span className=" text-orange-800">{movie.country}</span>
              </p>
              <p>
                
                <span className="font-bold">Language:</span>
                <span className=" text-orange-800">{movie.language}</span>
              </p>
              <p>
                
                <span className="font-bold">Duration:</span>
                <span className=" text-orange-800">{movie.duration} mins</span>
              </p>
            </div>
            <div className="mt-10 max-xl:mt-2">
              <p className="font-bold text-primary">
                Rating: <span>{movie.rating}</span>/10
              </p>
            </div>
            <div className="mt-5 max-xl:mt-2">
              <p className="font-bold ">
                Added By: <span>{movie.addedBy}</span>
              </p>
            </div>
            <div className="mt-10">
              <button onClick={addToWatchlist} className="btn btn-primary">
                Add To Watchlist
              </button>
            </div>
            {user.email === movie.addedBy ? (
              <div className="flex gap-2 mt-2">
                <Link
                  to={`/movies/update/${movie._id}`}
                  className="btn btn-sm btn-outline btn-info flex-1 py-4"
                >
                  Update
                </Link>
                <button
                  onClick={() => openDeleteModal(movie)}
                  className="btn btn-sm btn-outline btn-error flex-1 py-4"
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Deletion</h3>
          <p className="py-4">
            Are you sure you want to delete "
            <span className="font-bold">{movieToDelete?.title}</span>"?
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => setMovieToDelete(null)}>
                Cancel
              </button>
            </form>
            <button
              onClick={handleConfirmDelete}
              className="btn btn-error ml-3"
            >
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MovieDetails;
