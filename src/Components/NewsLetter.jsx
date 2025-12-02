import React, { useContext } from 'react';
import { toast, Bounce } from 'react-toastify';
import { Context } from '../Context/Context';

const Newsletter = () => {
    const darkmode = useContext(Context)
    
  const handleSubscribe = (e) => {
    
    e.preventDefault();
    toast.success("Thank you for subscribing!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
    e.target.reset();
  };

  return (
    <div className="py-20 bg-base-200">
      <div className=" max-lg:px-2 2xl:max-w-[1280px] lg:max-w-[1124px] container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-primary text-primary-content px-10 py-14 gap-10 rounded-2xl shadow-xl">
          
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="opacity-90">
              Get the latest movie updates, new trailers, and exclusive collections delivered right to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-1/2 flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className= {`input input-bordered w-full ${darkmode.darkmode ? "text-primary" : "text-base"}  outline-0`}
              required 
            />
            <button className={`btn ${darkmode.darkmode ? "text-yellow-500 bg-base-100" : "text-black bg-white "} `}>Subscribe</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;