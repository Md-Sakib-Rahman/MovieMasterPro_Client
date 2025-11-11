import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import axiosSecureInstance from "../Axios/AxiosSecure"
import Card from "../Components/Card"
import { Link } from "react-router";
import { Bounce, toast } from "react-toastify";

const MyCollection = () => {
  const { user, loader: authLoader } = useContext(Context)
  const [movies, setMovies] = useState([]);
  const [movieLoader, setMovieLoader] = useState(true)
  const [movieToDelete, setMovieToDelete] = useState(null)

  useEffect(() => {
    const fetchMyMovies = async () => {
      try {
        setMovieLoader(true);
        const res = await axiosSecureInstance.get(
          `/movies?email=${user.email}`
        );
        setMovies(res.data)
      } catch (error) {
        console.error("Error fetching my collection:", error)
        toast.error("Error fetching my collection:", {
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
      } finally {
        setMovieLoader(false);
      }
    };

    fetchMyMovies();
  }, [user]);
  const openDeleteModal = (movie) => {
    setMovieToDelete(movie); 
    document.getElementById("delete_modal").showModal(); 
  };
  const handleConfirmDelete = async () => {
    if (!movieToDelete) return;

    try {
      await axiosSecureInstance.delete(`/movies/${movieToDelete._id}`)
      setMovies((currentMovies) =>
        currentMovies.filter((movie) => movie._id !== movieToDelete._id)
      );
      toast.success("Movie deleted successfully!", {
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
    } catch (error) {
      console.error("Error deleting movie:", error);
      toast.error("Error deleting movie:", {
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
    }finally {
      setMovieToDelete(null); 
      document.getElementById('delete_modal').close(); 
    }
  };

  if (authLoader || movieLoader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning w-10"></span>
      </div>
    );
  }

  return (
    <>
    <div className="pt-20 min-h-screen">
      <h2 className="text-center font-bold text-3xl border-b-2 border-b-orange-500 w-[200px] mx-auto mt-10">
        My Collection
      </h2>

      {movies.length === 0 ? (
        <div className="text-center my-20">
          <p className="text-2xl">You haven't added any movies yet.</p>
          <Link to="/addmovies" className="btn btn-primary mt-6">
            Add Your First Movie
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2  max-sm:grid-cols-1 gap-10 my-10 w-[80%] mx-auto">
          {movies.map((movie) => (
            <div key={movie._id} className="flex flex-col">
              <Card data={movie} />

              <div className="flex gap-2 mt-2">
                <Link
                  to={`/movies/update/${movie._id}`}
                  className="btn btn-sm btn-outline btn-info flex-1"
                >
                  Update
                </Link>
                <button
                  onClick={() => openDeleteModal(movie)}
                  className="btn btn-sm btn-outline btn-error flex-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Deletion</h3>
          <p className="py-4">
            Are you sure you want to delete "<span className="font-bold">{movieToDelete?.title}</span>"? 
            
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button 
                className="btn" 
                onClick={() => setMovieToDelete(null)} 
              >
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

export default MyCollection;
