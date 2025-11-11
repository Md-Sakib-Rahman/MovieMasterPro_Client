import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../Context/Context'; 
import axiosSecureInstance from '../Axios/AxiosSecure'; 
import { Bounce, toast, ToastContainer } from 'react-toastify';

const AddMoviePage = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setLoading(true);
    const form = e.target;
    
    
    const movieData = {
      title: form.title.value,
      genre: form.genre.value,
      releaseYear: parseInt(form.releaseYear.value), 
      director: form.director.value,
      cast: form.cast.value,
      rating: parseFloat(form.rating.value), 
      duration: parseInt(form.duration.value), 
      plotSummary: form.plotSummary.value,
      posterUrl: form.posterUrl.value,
      language: form.language.value,
      country: form.country.value,
      addedBy: user.email, 
    };

    try {
      
      const res = await axiosSecureInstance.post('/movies', movieData);
      
      console.log('Movie added:', res.data);
      toast.success("Movie added successfully!", {
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
      navigate('/mycollection');

    } catch (err) {
      console.error("Error adding movie:", err);
      toast.error("Error adding movie", {
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
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-base-200">
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">Add a New Movie</h2>
        
        <form onSubmit={handleSubmit} className="card shadow-2xl bg-base-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
           
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Title</span></label>
              <input type="text" name="title" placeholder="Movie Title" className="input input-bordered max-md:w-full" required />
            </div>

           
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Genre</span></label>
              <input type="text" name="genre" placeholder="e.g., Sci-Fi, Drama" className="input input-bordered max-md:w-full" required />
            </div>

           
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Release Year</span></label>
              <input type="number" name="releaseYear" placeholder="e.g., 2010" className="input input-bordered max-md:w-full" required />
            </div>

          
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Rating (out of 10)</span></label>
              <input type="number" name="rating" placeholder="e.g., 8.8" step="0.1" min="0" max="10" className="input input-bordered max-md:w-full" required />
            </div>

           
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Director</span></label>
              <input type="text" name="director" placeholder="e.g., Christopher Nolan" className="input input-bordered max-md:w-full" required />
            </div>

            
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Duration (in minutes)</span></label>
              <input type="number" name="duration" placeholder="e.g., 148" className="input input-bordered max-md:w-full" required />
            </div>

           
            <div className="form-control md:col-span-2 flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Cast</span></label>
              <input type="text" name="cast" placeholder="e.g., Leonardo DiCaprio, Joseph Gordon-Levitt" className="input input-bordered max-md:w-full" required />
            </div>

            
            <div className="form-control md:col-span-2 flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Poster URL</span></label>
              <input type="url" name="posterUrl" placeholder="https://i.ibb.co/example.jpg" className="input input-bordered max-md:w-full" required />
            </div>

            
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Language</span></label>
              <input type="text" name="language" placeholder="e.g., English" className="input input-bordered max-md:w-full" required />
            </div>

           
            <div className="form-control flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Country</span></label>
              <input type="text" name="country" placeholder="e.g., USA" className="input input-bordered max-md:w-full" required />
            </div>

            
            <div className="form-control md:col-span-2 flex flex-col justify-start items-start">
              <label className="label"><span className="label-text">Plot Summary</span></label>
              <textarea name="plotSummary" className="textarea textarea-bordered h-24" placeholder="A brief summary of the movie..." required></textarea>
            </div>
            
          </div>
          
          <div className="form-control mt-8">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Add Movie"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMoviePage;