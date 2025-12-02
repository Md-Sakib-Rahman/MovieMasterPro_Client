import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router"; 
import axiosInstance from "../Axios/Axios";
import { Context } from "../Context/Context";
import axiosSecureInstance from "../Axios/AxiosSecure";
import { Bounce, toast, ToastContainer } from "react-toastify";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loader, setLoader] = useState(true);
  const [movieToDelete, setMovieToDelete] = useState(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  
  const addToWatchlist = async () => {
    try {
      await axiosSecureInstance.post("/users/add-to-watchlist", {
        movieId: id,
      });
      toast.success("Movie added to watchlist successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error while adding movie to watchlist.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  
  const openDeleteModal = (movie) => {
    setMovieToDelete(movie);
    document.getElementById("delete_modal").showModal();
  };

  const handleConfirmDelete = async () => {
    if (!movieToDelete) return;

    try {
      await axiosSecureInstance.delete(`/movies/${movieToDelete._id}`);
      toast.success("Movie deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      navigate('/mycollection'); 
    } catch (error) {
      console.error("Error deleting movie:", error);
      toast.error("Error deleting movie.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setMovieToDelete(null);
      document.getElementById('delete_modal').close();
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosInstance.get(`/movies/${id}`);
        console.log(data.data)
        setMovie(data.data);
        setLoader(false);
      } catch (err) {
        console.log(err);
        setLoader(false); 
      }
    };
    fetchData();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return loader ? (
    <div className="pt-20 w-full min-h-screen flex flex-col items-center justify-center">
      <span className="loading loading-spinner text-warning w-10"></span>
    </div>
  ) : (
    <>
      <ToastContainer />
      
      <div className="pt-24 pb-16 min-h-screen bg-base-200">
        <div className="container mx-auto px-4 lg:max-w-6xl">
          
          
          <div className="mb-6">
            <button onClick={handleGoBack} className="btn btn-outline btn-sm">
              &larr; Back
            </button>
          </div>

          
          <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden mb-10">
            
            <figure className="w-[380px] mx-auto p-4 lg:w-1/3 h-full">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover min-h-[500px]" 
              />
            </figure>
            
            
            <div className="card-body lg:w-2/3">
              <h2 className="card-title text-4xl font-bold mb-2">{movie.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge badge-primary badge-lg">{movie.genre}</span>
                <span className="badge badge-outline badge-lg">{movie.releaseYear}</span>
                <span className="badge badge-outline badge-lg">{movie.duration} mins</span>
                <span className="badge badge-outline badge-lg">{movie.language}</span>
              </div>

              <p className="text-lg text-base-content/80 italic mb-6">"{movie.plotSummary}"</p>

              
              {movie.awards && (
                <div className="alert bg-base-200 border-l-4 border-accent rounded-none mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-accent shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  <span className="font-medium">{movie.awards}</span>
                </div>
              )}

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
                <div><span className="font-bold block text-base-content/60">Director</span> {movie.director}</div>
                <div><span className="font-bold block text-base-content/60">Country</span> {movie.country}</div>
                <div><span className="font-bold block text-base-content/60">Rating</span> <span className="text-warning font-bold">★ {movie.rating}/10</span></div>
                <div><span className="font-bold block text-base-content/60">Added By</span> {movie.addedBy}</div>
              </div>

              <div className="divider"></div>

             
              <div className="card-actions justify-end items-center gap-4">
                <button onClick={addToWatchlist} className="btn btn-primary">
                  Add to Watchlist
                </button>

                
                {user?.email === movie.addedBy && (
                  <div className="join">
                    <Link to={`/movies/update/${movie._id}`} className="btn btn-info join-item">
                      Update
                    </Link>
                    <button onClick={() => openDeleteModal(movie)} className="btn btn-error join-item">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            
            <div className="lg:col-span-2 space-y-8">
              {movie.trailerUrl && (
                <div className="bg-base-100 p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-8 bg-red-600 rounded-full"></span> 
                    Official Trailer
                  </h3>
                  <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe 
                      className="w-full h-full"
                      src={movie.trailerUrl} 
                      title="YouTube video player" 
                      
                      allow="autoplay; encrypted-media; "
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            
            <div className="space-y-8">
              
              <div className="bg-base-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Top Cast</h3>
                <p className="text-lg leading-relaxed">{movie.cast}</p>
              </div>

              
              {movie.trivia && (
                <div className="bg-base-100 p-6 rounded-xl shadow-lg border-t-4 border-secondary">
                  <h3 className="text-xl font-bold mb-4">Did You Know?</h3>
                  <ul className="space-y-4">
                    {movie.trivia.map((fact, index) => (
                      <li key={index} className="flex gap-3 text-sm text-base-content/80">
                        <span className="text-secondary text-xl font-bold">•</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">Confirm Deletion</h3>
          <p className="py-4">
            Are you sure you want to delete <span className="font-bold">"{movieToDelete?.title}"</span>? 
            <br/><span className="text-xs opacity-70">This action cannot be undone.</span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => setMovieToDelete(null)}>Cancel</button>
            </form>
            <button onClick={handleConfirmDelete} className="btn btn-error">Delete</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MovieDetails;


