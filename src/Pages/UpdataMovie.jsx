import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import axiosInstance from '../Axios/Axios'; 
import axiosSecureInstance from '../Axios/AxiosSecure'; 
import { Context } from '../Context/Context'; 
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateMovie = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { user, loader: authLoader } = useContext(Context);

  const [movie, setMovie] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load movie data.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    
    
    const triviaText = form.trivia.value;
    const triviaArray = triviaText.split('\n').filter(line => line.trim() !== '');

    const updatedData = {
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
      trailerUrl: form.trailerUrl.value,
      awards: form.awards.value,
      trivia: triviaArray, 
    };

    try {
      await axiosSecureInstance.patch(`/movies/${id}`, updatedData);
      
      toast.success("Movie Updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      
      setTimeout(() => {
        navigate('/mycollection');
      }, 1000);

    } catch (err) {
      console.error("Error updating movie:", err);
      toast.error('Failed to update movie.');
    } finally {
      setLoading(false);
    }
  };

  
  if (loading || authLoader) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-spinner text-warning w-10"></span>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-xl text-error'>Movie not found.</p>
      </div>
    );
  }

  if (user && movie && user.email !== movie.addedBy) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-xl text-error'>
          You are not authorized to edit this movie.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-base-200">
      <ToastContainer />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">Update Movie</h2>
        
        <form onSubmit={handleSubmit} className="card shadow-2xl bg-base-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title */}
            <div className="form-control">
              <label className="label"><span className="label-text">Title</span></label>
              <input type="text" name="title" className="input input-bordered w-full" required defaultValue={movie.title} />
            </div>

            {/* Genre */}
            <div className="form-control">
              <label className="label"><span className="label-text">Genre</span></label>
              <input type="text" name="genre" className="input input-bordered w-full" required defaultValue={movie.genre} />
            </div>

            {/* Release Year */}
            <div className="form-control">
              <label className="label"><span className="label-text">Release Year</span></label>
              <input type="number" name="releaseYear" className="input input-bordered w-full" required defaultValue={movie.releaseYear} />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label"><span className="label-text">Rating (out of 10)</span></label>
              <input type="number" name="rating" step="0.1" min="0" max="10" className="input input-bordered w-full" required defaultValue={movie.rating} />
            </div>

            {/* Director */}
            <div className="form-control">
              <label className="label"><span className="label-text">Director</span></label>
              <input type="text" name="director" className="input input-bordered w-full" required defaultValue={movie.director} />
            </div>

            {/* Duration */}
            <div className="form-control">
              <label className="label"><span className="label-text">Duration (in minutes)</span></label>
              <input type="number" name="duration" className="input input-bordered w-full" required defaultValue={movie.duration} />
            </div>

            {/* Cast */}
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text">Cast</span></label>
              <input type="text" name="cast" className="input input-bordered w-full" required defaultValue={movie.cast} />
            </div>

            {/* Poster URL */}
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text">Poster URL</span></label>
              <input type="url" name="posterUrl" className="input input-bordered w-full" required defaultValue={movie.posterUrl} />
            </div>

            {/* --- Trailer URL --- */}
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text">Trailer Embed URL</span></label>
              <input type="url" name="trailerUrl" className="input input-bordered w-full" defaultValue={movie.trailerUrl} />
            </div>

            {/* Language */}
            <div className="form-control">
              <label className="label"><span className="label-text">Language</span></label>
              <input type="text" name="language" className="input input-bordered w-full" required defaultValue={movie.language} />
            </div>

            {/* Country */}
            <div className="form-control">
              <label className="label"><span className="label-text">Country</span></label>
              <input type="text" name="country" className="input input-bordered w-full" required defaultValue={movie.country} />
            </div>

            {/* --- Awards --- */}
            <div className="form-control md:col-span-2">
              <label className="label"><span className="label-text">Awards</span></label>
              <input type="text" name="awards" className="input input-bordered w-full" defaultValue={movie.awards} />
            </div>

            {/* Plot Summary */}
            <div className="form-control md:col-span-2 flex flex-col justify-between">
              <label className="label"><span className="label-text">Plot Summary</span></label>
              <textarea name="plotSummary" className="textarea textarea-bordered h-24 w-full" required defaultValue={movie.plotSummary}></textarea>
            </div>

            {/* --- Trivia --- */}
            <div className="form-control md:col-span-2 flex flex-col justify-between">
              <label className="label"><span className="label-text">Trivia (One fact per line)</span></label>
              <textarea 
                name="trivia" 
                className="textarea textarea-bordered h-32 w-full" 
                
                defaultValue={movie.trivia ? movie.trivia.join('\n') : ''} 
              ></textarea>
            </div>
            
          </div>

          <div className="form-control mt-8">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Update Movie"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;


// import { useParams, useNavigate } from 'react-router';
// import axiosInstance from '../Axios/Axios'; 
// import axiosSecureInstance from '../Axios/AxiosSecure'; 
// import { Context } from '../Context/Context'; 
// import { Bounce, toast } from 'react-toastify';

// const UpdateMovie = () => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();
//   const { user, loader: authLoader } = useContext(Context);

//   const [movie, setMovie] = useState(null); 
//   const [loading, setLoading] = useState(true);

 
//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         setLoading(true);
       
//         const res = await axiosInstance.get(`/movies/${id}`);
//         setMovie(res.data);
//       } catch (err) {
//         console.error(err);
//         toast.error("Failed to load movie data.", {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//               });
        
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMovie();
//   }, [id]); 

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     setLoading(true);

//     const form = e.target;
    
    
//     const updatedData = {
//       title: form.title.value,
//       genre: form.genre.value,
//       releaseYear: parseInt(form.releaseYear.value),
//       director: form.director.value,
//       cast: form.cast.value,
//       rating: parseFloat(form.rating.value),
//       duration: parseInt(form.duration.value),
//       plotSummary: form.plotSummary.value,
//       posterUrl: form.posterUrl.value,
//       language: form.language.value,
//       country: form.country.value,
      
//     };

//     try {
      
//       await axiosSecureInstance.patch(`/movies/${id}`, updatedData);
      
//        toast.success("Movie Updated successfully!", {
//               position: "top-right",
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "light",
//               transition: Bounce,
//             });
      
//       navigate('/mycollection');

//     } catch (err) {
//       console.error("Error updating movie:", err);
//       toast.error('Failed to update movie.', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//               });
//     } finally {
//       setLoading(false);
//     }
//   };

  
//   if (loading || authLoader) {
//     return (
//       <div className='flex justify-center items-center h-screen'>
//         <span className="loading loading-spinner text-warning w-10"></span>
//       </div>
//     );
//   }

//   if (!movie) {
//     return (
//       <div className='flex justify-center items-center h-screen'>
//         <p className='text-xl text-error'>Error</p>
//       </div>
//     );
//   }

//   if (user && movie && user.email !== movie.addedBy) {
//     return (
//       <div className='flex justify-center items-center h-screen'>
//         <p className='text-xl text-error'>
//           You are not authorized to edit this movie.
//         </p>
//       </div>
//     );
//   }


//   return (
//     <div className="pt-20 min-h-screen bg-base-200">
//       <div className="container mx-auto px-4 py-12 max-w-4xl">
//         <h2 className="text-3xl font-bold text-center mb-10">Update Movie</h2>
        
//         <form onSubmit={handleSubmit} className="card shadow-2xl bg-base-100 p-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Title</span></label>
//               <input type="text" name="title" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.title} />
//             </div>
//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Genre</span></label>
//               <input type="text" name="genre" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.genre} />
//             </div>

//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Release Year</span></label>
//               <input type="number" name="releaseYear" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.releaseYear} />
//             </div>

//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Rating (out of 10)</span></label>
//               <input type="number" name="rating" step="0.1" min="0" max="10" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.rating} />
//             </div>

//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Director</span></label>
//               <input type="text" name="director" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.director} />
//             </div>

//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Duration (in minutes)</span></label>
//               <input type="number" name="duration" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.duration} />
//             </div>

//             <div className="form-control md:col-span-2 flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Cast</span></label>
//               <input type="text" name="cast" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.cast} />
//             </div>

//             <div className="form-control md:col-span-2 flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Poster URL</span></label>
//               <input type="url" name="posterUrl" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.posterUrl} />
//             </div>

//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Language</span></label>
//               <input type="text" name="language" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.language} />
//             </div>

//             <div className="form-control flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Country</span></label>
//               <input type="text" name="country" className="input input-bordered max-md:w-full" required 
//                      defaultValue={movie.country} />
//             </div>

//             <div className="form-control md:col-span-2 flex flex-col justify-start items-start">
//               <label className="label"><span className="label-text">Plot Summary</span></label>
//               <textarea name="plotSummary" className="textarea textarea-bordered h-24" required 
//                         defaultValue={movie.plotSummary}></textarea>
//             </div>
            
//           </div>

        

//           <div className="form-control mt-8">
//             <button type="submit" className="btn btn-primary" disabled={loading}>
//               {loading ? <span className="loading loading-spinner"></span> : "Update Movie"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateMovie;